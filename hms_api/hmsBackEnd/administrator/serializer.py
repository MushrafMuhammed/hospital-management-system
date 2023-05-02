from rest_framework import serializers

from administrator.models import Administrator, Department, Doctor, OpenTickets

class AdministratorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Administrator
        fields = '__all__'

class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = '__all__'

class DoctorSerializer(serializers.ModelSerializer):
    department = DepartmentSerializer()
    class Meta:
        model = Doctor
        fields = '__all__'

class TicketSerializer(serializers.ModelSerializer):
    class Meta:
        model = OpenTickets
        fields = '__all__'

