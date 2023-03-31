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
        admin = administrator.objects.get(
            email = username,
            password = password   
        )
        name = admin.name
        email = admin.email
        return JsonResponse({'statusCode': 200, 'token': admin.id, 'user':name, 'username':email})
    
    except:
        msg ='Invalid Login attempt'
        return JsonResponse({'message':msg})
