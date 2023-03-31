# Generated by Django 4.1.7 on 2023-03-31 17:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('administrator', '0002_department_doctor'),
    ]

    operations = [
        migrations.AddField(
            model_name='department',
            name='description',
            field=models.CharField(default='', max_length=1000),
        ),
        migrations.AlterField(
            model_name='department',
            name='name',
            field=models.CharField(default='', max_length=500),
        ),
    ]
