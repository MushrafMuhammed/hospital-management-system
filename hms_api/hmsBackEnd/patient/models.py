from django.db import models

# Create your models here.

class Patient(models.Model):
  name = models.CharField(max_length=100)
  address = models.CharField(max_length=1000)
  gender = models.CharField(max_length=50)
  email = models.CharField(max_length=200)
  phone = models.BigIntegerField()
  dob = models.CharField(max_length=50)
  password = models.CharField(max_length=200)
