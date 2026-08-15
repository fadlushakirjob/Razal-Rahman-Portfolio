from django.urls import path
from .views import ContactView, HealthCheckView

urlpatterns = [
    path('contact', ContactView.as_view(), name='contact'),
    path('health', HealthCheckView.as_view(), name='health'),
]
