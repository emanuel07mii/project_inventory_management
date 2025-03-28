from django.urls import path
from . import views

# Define uma lista de URL patterns
urlpatterns = [
    path('', views.index)
]