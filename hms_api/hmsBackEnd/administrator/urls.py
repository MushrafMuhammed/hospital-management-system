from . import views
from django.urls import path

urlpatterns = [
    path('login', views.login_fun),
    path('add-department', views.addDepartment_fun)

]