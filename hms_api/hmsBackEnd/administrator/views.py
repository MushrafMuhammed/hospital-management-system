from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view

from administrator.serializer import DepartmentSerializer

from . models import Administrator


# Create your views here.
@api_view(['POST'])
def login_fun(request):
    params = request.data
    username = params['username']
    password = params['password']

    try:
        admin = Administrator.objects.get(
            email=username,
            password=password
        )
        name = admin.name
        email = admin.email
        return JsonResponse({'statusCode': 200, 'token': admin.id, 'user': name, 'username': email})

    except:
        msg = 'Invalid Login attempt'
        return JsonResponse({'message': msg})


@api_view(['POST'])
def addDepartment_fun(request):
    msg = ""
    try:
        params = request.data
        serialized_data = DepartmentSerializer(data=params)
        if serialized_data.is_valid():
            serialized_data.save()
            status_code = 200
            msg = 'Department added Successfuly'
        else:
            status_code = 403
            msg = "Invalid entry"
    except:
        status_code = 401
        msg = 'somthing went wrong'

    return JsonResponse({'statusCode': status_code, 'message': msg})
