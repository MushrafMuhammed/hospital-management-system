from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view

from .models import administrator


# Create your views here.
@api_view(['POST'])
def login_fun(request):
    params = request.data
    username = params['username']    
    password = params['password']

    try:
        admin = administrator.object.get(
            email = username,
            password = password
        )
        name = admin.name
        email = admin.email   
        return JsonResponse({'statusCode': 200, 'user':name, 'username':email})
    
    except:
        msg ='Invalid credentials'
        return JsonResponse({'message':msg})
