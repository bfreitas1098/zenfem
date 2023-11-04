from django.db import models

# Create your models here.

class User(models.Model):
    username = models.CharField(max_length=80, unique=True)
    fname = models.CharField(max_length=80)
    surname = models.CharField(max_length=80)
    bio         = models.CharField(max_length=120, blank=True, null=True)
    interests   = models.CharField(max_length=120)
    bday        = models.DateField()

    # def __str__(self):
    #     return self.username + ' ' +self.description