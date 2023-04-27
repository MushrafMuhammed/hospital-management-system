from . import views
from django.urls import path

urlpatterns = [
   path('get-appoinment',views.get_appoinment) 
   
]