from django.db import models

from administrator.models import Department, Doctor

# Create your models here.

class Appointment(models.Model) :
    token_no = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    phone = models.BigIntegerField()
    appointment_date = models.DateField()
    appointment_time = models.CharField(max_length=50, default='')
    department = models.ForeignKey(Department, on_delete=models.CASCADE)
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE)
    message = models.CharField(max_length=2000)
    

class Prescription (models.Model):
  patient = models.CharField(max_length=200)
  token = models.ForeignKey(Appointment, on_delete=models.CASCADE)
  doctor = models.CharField(max_length=200)
  medicine = models.CharField(max_length=200)
  dosage = models.CharField(max_length=2000)
  frequency = models.CharField(max_length=2000)
  start_date = models.CharField(max_length=200)
  end_date = models.CharField(max_length=200)

