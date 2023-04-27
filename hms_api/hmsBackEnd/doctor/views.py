

from django.http import JsonResponse
from rest_framework.decorators import api_view

from doctor.serializer import AppointmentSerializer

@api_view(['POST'])
def get_appoinment(request):
    msg = ''
    params = request.data
    print(params)
    # dept = int(params['department'])
    # doctor = int(params['doctor'])
    serialized_data = AppointmentSerializer(data=params)
    
    if serialized_data.is_valid():
        serialized_data.save()
        msg = 'Appoinment Done'
    else:
        print(serialized_data.errors)
        msg= 'invalid entry'
    return JsonResponse({'message':msg})