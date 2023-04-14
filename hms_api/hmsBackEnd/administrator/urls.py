from . import views
from django.urls import path

urlpatterns = [
    path('login', views.login_fun),
    path('add-department', views.addDepartment),
    path('view-department', views.view_department),
    path('add-doctor', views.add_doctor),
    path('view-doctor', views.view_doctor),
    path('my-profile/<int:token>', views.view_profile),
    path('change-password', views.changePassword),
    path('get-doctor/<int:deptData>', views.getDoctor),

]