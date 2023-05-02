from rest_framework import serializers
from administrator.serializer import DoctorSerializer

from doctor.models import Appointment

class AppointmentSerializer(serializers.ModelSerializer):
    doctor = DoctorSerializer()
    class Meta:
        model= Appointment
        fields = '__all__'









