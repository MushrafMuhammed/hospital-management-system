from django.db import models

# Create your models here.
class administrator(models.Model):
    name = models.CharField(max_length=30)
    email = models.EmailField(max_length=50)
    password = models.CharField(max_length=20)
    job_title = models.CharField(max_length=50)

class department(models.Model):
    name = models.CharField(max_length=200)
    
class doctor(models.Model):
    name = models.CharField(max_length=30)
    email = models.EmailField(max_length=50)
    password = models.CharField(max_length=20)
    department = models.CharField(max_length=50)
    profile_img =  models.ImageField(upload_to="media/")
