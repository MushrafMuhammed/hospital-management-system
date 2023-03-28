from django.db import models

# Create your models here.

class Appointment(models.Model) :
    token_no = models.IntegerField(default=0)
    name = models.CharField(max_length=50)
    email = models.EmailField(max_length=50)
    number = models.CharField(max_length=50)
    appointment_date = models.CharField(max_length=30)
    department = models.CharField(max_length=50)
    doctor = models.CharField(max_length=50)
    message = models.CharField(max_length=500, default="")
 

class Patient:
  name = models.CharField(max_length=100)
  age = models.CharField(max_length=50)
  gender = models.CharField(max_length=50)


class Prescription :
  patient = models.CharField(max_length=200)
  token = models.ForeignKey(Appointment, on_delete=models.CASCADE)
  doctor = models.CharField(max_length=200)
  medicine = models.CharField(max_length=200)
  dosage = models.CharField(max_length=2000)
  frequency = models.CharField(max_length=2000)
  start_date = models.CharField(max_length=200)
  end_date = models.CharField(max_length=200)

