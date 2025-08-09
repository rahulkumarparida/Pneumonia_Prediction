from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PneumoniaScanViewSet

router = DefaultRouter()
router.register(r'scan', PneumoniaScanViewSet, basename='pneumonia-scan')

urlpatterns = [
    path('', include(router.urls)),
]
