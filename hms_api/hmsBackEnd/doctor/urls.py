from . import views
from django.urls import path

urlpatterns = [
    path('patient-reg', views.patientReg),
    path('patient-login', views.patientLog),
   
]