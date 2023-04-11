from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view

# Create your views here.
@api_view(['POST'])
def login_fun(request):
    
    return JsonResponse()

@api_view(['POST'])
def patientRegistration_fun(requst):
    
    return JsonResponse() 
