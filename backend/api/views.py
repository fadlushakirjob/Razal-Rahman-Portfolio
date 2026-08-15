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

            # Attempt to send email
            try:
                email_body = f"""New Portfolio Contact

Name: {message_instance.name}
Email: {message_instance.email}
Subject: {message_instance.subject}

Message:
{message_instance.message}

Received: {message_instance.created_at.strftime('%Y-%m-%d %H:%M:%S')}
"""
                send_mail(
                    subject=f"New Portfolio Contact: {message_instance.subject}",
                    message=email_body,
                    from_email=settings.DEFAULT_FROM_EMAIL,
                    recipient_list=[settings.CONTACT_EMAIL],
                    fail_silently=False,
                )
            except Exception as e:
                # Log email failure but don't fail the request since message is saved
                print(f"Failed to send email: {e}")

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
