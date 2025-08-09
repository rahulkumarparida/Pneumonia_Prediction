from django.urls import path , include
from .views import home_peumonia
urlpatterns = [
    path('', home_peumonia ),
]