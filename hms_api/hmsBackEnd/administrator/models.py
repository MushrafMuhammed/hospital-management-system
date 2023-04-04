from django.db import models

# Create your models here.
class Administrator(models.Model):
    name = models.CharField(max_length=30)
    email = models.EmailField(max_length=50)
    password = models.CharField(max_length=20)
    job_title = models.CharField(max_length=50)

class Department(models.Model):
    name = models.CharField(max_length=500)
    description = models.CharField(max_length=1000)
    
class Doctor(models.Model):
    name = models.CharField(max_length=30)
    address = models.CharField(max_length=1000)
    gender = models.CharField(max_length=50)
    email = models.EmailField(max_length=100)
    phone  = models.CharField(max_length=15)
    qualification = models.CharField(max_length=500)
    password = models.CharField(max_length=20)
    department = models.ForeignKey(Department, on_delete=models.CASCADE)
    profile_img =  models.ImageField(upload_to="doctor/")
