from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view

from administrator.serializer import AdministratorSerializer, DepartmentSerializer, DoctorSerializer, TicketSerializer
from doctor.models import Appointment
from doctor.serializer import AppointmentSerializer

from . models import Administrator, Department, Doctor, OpenTickets

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
            msg = 'Department added Successfully'
        else:
            status_code = 403
            msg = "Invalid entry"
    except Exception as e:
        print(e)
        status_code = 401
        msg = 'somthing went wrong'

    return JsonResponse({'statusCode': status_code, 'message': msg})


@api_view(['GET'])
def view_department(request):
    department = Department.objects.all()
    serialized_data = DepartmentSerializer(department, many=True)
    departments = serialized_data.data
    return JsonResponse({'departmentsList': departments})


@api_view(['POST'])
def add_doctor(request):
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


@api_view(['GET'])
def view_doctor(request):
    doctor = Doctor.objects.all()
    serialized_data = DoctorSerializer(doctor, many=True)
    count = doctor.count()
    doctors = serialized_data.data

    return JsonResponse({'doctorsList': doctors, 'drCount': count})


@api_view(['GET'])
def view_profile(request, token):
    print(token)
    my_profile = Administrator.objects.get(id=token)
    serialized_data = AdministratorSerializer(my_profile)
    print(serialized_data.data)

    profile = serialized_data.data

    return JsonResponse({'profile_details': profile})


@api_view(['POST'])
def changePassword(request):
    msg = ''
    params = request.data
    token = params['token']
    currentpass = params['currentPassword']
    newpassword = params['newPassword']

    admin = Administrator.objects.get(id=token)

    if (admin.password == currentpass):
        admin.password = newpassword
        admin.save()
        msg = 'successfully password changed'
    else:
        msg = 'check your old password'
    
    return JsonResponse({'errorMessage': msg})

@api_view(['GET'])
def getDoctor(request,deptData):
    doctots = Doctor.objects.filter(
        department = deptData
    )
    serialized_data = DoctorSerializer(doctots, many=True)
    
    return JsonResponse({'doctors':serialized_data.data})

@api_view(['POST'])
def genOpenTicket(request):
    msg=''

    params = request.data
    print(params)
    serialized_data = TicketSerializer(data=params)
    print(serialized_data)
    if serialized_data.is_valid():
        serialized_data.save()
        msg = 'Ticket generated'
    else:
        msg= 'Invalid entry'
    return JsonResponse({'message':msg})

@api_view(['GET'])
def listOpenTicket(request):
    tickets = OpenTickets.objects.all()
    serialized_data =  TicketSerializer(tickets, many=True)
    print(serialized_data.data)
    ticketsCount= tickets.count()
    return JsonResponse({'ticketList':serialized_data.data, 'totalTicket':ticketsCount})

@api_view(['GET'])
def viewAppointments(request):
    appointment = Appointment.objects.all()
    serialized_data =  AppointmentSerializer(appointment, many=True)
    # print(serialized_data.data)
    appointmentCount= appointment.count()
    return JsonResponse({'appointmentList':serialized_data.data, 'totalAppointment':appointmentCount})