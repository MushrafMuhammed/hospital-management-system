from django.http import JsonResponse
from django.shortcuts import render
from rest_framework.decorators import api_view

from patient.models import Patient
from patient.serializer import patientSerializer

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

api_view(['GET'])
def view_patient(request):
    patientList= Patient.objects.all()
    patientCount= patientList.count()
    serialized_data= patientSerializer(patientList, many=True)
    return JsonResponse({'patients':serialized_data.data,'count':patientCount})