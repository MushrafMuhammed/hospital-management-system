from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view

from administrator.serializer import DepartmentSerializer, DoctorSerializer

from . models import Administrator, Department, Doctor


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
def addDepartment(request):
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

@api_view(['GET'])
def view_department(request):
    department = Department.objects.all()
    serialized_data= DepartmentSerializer(department, many=True)
    departments=serialized_data.data
    return JsonResponse({'departmentsList': departments})

@api_view(['POST'])
def addDoctor(request):
    params = request.data
    print(params)
    serialized_data = DoctorSerializer(data=params) 
        
   
    if serialized_data.is_valid():
        serialized_data.save()
        print(serialized_data.errors)
        status_code = 200
        msg = 'Doctor added Successfuly'
    else:
        print(serialized_data.errors)
        status_code = 403
        msg = "Invalid entry"
    
    
    return JsonResponse({'statusCode': status_code, 'message': msg})
