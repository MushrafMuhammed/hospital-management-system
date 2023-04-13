from django.http import JsonResponse
from django.shortcuts import render
from doctor.models import Patient
from rest_framework.decorators import api_view

from doctor.serializer import patientSerializer

# Create your views here.

@api_view(['POST'])
def patientReg(request):
    msg = ''

    try:
        params = request.data
        print(params)
        serialized_data = patientSerializer(data=params)
        # print(serialized_data.data)
        if serialized_data.is_valid():
            serialized_data.save()
            msg = 'Successfully Registrared'
        else:
            msg = 'Invalid entry'

    except Exception as e:
        print(e)
        msg = 'somthing went wrong'
    return JsonResponse({'message': msg})

@api_view(['POST'])
def patientLog(request):
    params = request.data
    msg = ''
    username = params['username']
    password = params['password']

    try:
        patient= Patient.objects.get(
            email=username,
            password=password
        )
        user= patient.name
        username = patient.email
        msg = 'successfully logged in'
        return JsonResponse({ 'message': msg, 'user':user, 'username':username,'token':patient.id })
    except:
        msg = 'Invalid username or password. Please try again.'
        return JsonResponse({'message': msg})
