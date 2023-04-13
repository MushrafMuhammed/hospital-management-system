from rest_framework import serializers

from doctor.models import Patient



class patientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = '__all__'

