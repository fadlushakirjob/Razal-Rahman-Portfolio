from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import send_mail
from django.conf import settings
from .serializers import MessageSerializer

class ContactView(APIView):
    def post(self, request):
        serializer = MessageSerializer(data=request.data)
        if serializer.is_valid():
            message_instance = serializer.save()

            # Send email via HTTPS API (Web3Forms) to bypass cloud SMTP port blocks
            sent = False
            web3forms_key = getattr(settings, 'WEB3FORMS_ACCESS_KEY', '61215279-0213-44ba-b7bc-1ed7dc80b480')
            if web3forms_key:
                try:
                    import json
                    import urllib.request
                    payload = {
                        "access_key": web3forms_key,
                        "name": message_instance.name,
                        "email": message_instance.email,
                        "subject": f"New Portfolio Contact: {message_instance.subject}",
                        "message": message_instance.message,
                        "from_name": f"{message_instance.name} (Portfolio)",
                        "replyto": message_instance.email,
                    }
                    req = urllib.request.Request(
                        "https://api.web3forms.com/submit",
                        data=json.dumps(payload).encode("utf-8"),
                        headers={"Content-Type": "application/json", "Accept": "application/json", "User-Agent": "PortfolioApp/1.0"},
                        method="POST"
                    )
                    with urllib.request.urlopen(req, timeout=10) as response:
                        res_body = json.loads(response.read().decode("utf-8"))
                        if res_body.get("success"):
                            sent = True
                            print("Email sent successfully via Web3Forms HTTPS API!")
                        else:
                            print(f"Web3Forms error response: {res_body}")
                except Exception as e:
                    print(f"Failed to send via Web3Forms: {e}")

            # Fallback to SMTP if not sent via Web3Forms
            if not sent and settings.EMAIL_HOST_USER:
                try:
                    from django.core.mail import EmailMessage
                    email_body = f"""New Portfolio Contact

Name: {message_instance.name}
Email: {message_instance.email}
Subject: {message_instance.subject}

Message:
{message_instance.message}

Received: {message_instance.created_at.strftime('%Y-%m-%d %H:%M:%S')}
"""
                    email = EmailMessage(
                        subject=f"New Portfolio Contact: {message_instance.subject}",
                        body=email_body,
                        from_email=settings.DEFAULT_FROM_EMAIL,
                        to=[settings.CONTACT_EMAIL],
                        reply_to=[message_instance.email],
                    )
                    email.send(fail_silently=False)
                    print("Email sent successfully via SMTP!")
                except Exception as e:
                    import traceback
                    print(f"Failed to send via SMTP fallback: {e}")
                    traceback.print_exc()

            return Response({
                "success": True, 
                "message": "Message sent successfully."
            }, status=status.HTTP_200_OK)
        
        # Format errors nicely for frontend
        error_msg = "Invalid data provided."
        if serializer.errors:
            # Get first error message
            error_msg = list(serializer.errors.values())[0][0]

        return Response({
            "success": False, 
            "message": error_msg
        }, status=status.HTTP_400_BAD_REQUEST)


class HealthCheckView(APIView):
    def get(self, request):
        return Response({"status": "ok"}, status=status.HTTP_200_OK)
