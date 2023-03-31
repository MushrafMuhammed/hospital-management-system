# Generated by Django 4.1.7 on 2023-03-30 10:20

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Appointment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('token_no', models.IntegerField(default=0)),
                ('name', models.CharField(max_length=50)),
                ('email', models.EmailField(max_length=50)),
                ('number', models.CharField(max_length=50)),
                ('appointment_date', models.CharField(max_length=30)),
                ('department', models.CharField(max_length=50)),
                ('doctor', models.CharField(max_length=50)),
                ('message', models.CharField(default='', max_length=500)),
            ],
        ),
    ]
