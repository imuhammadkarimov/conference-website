from django.db import models
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    """Custom user model for conference website"""
    bio = models.TextField(blank=True)
    organization = models.CharField(max_length=100, blank=True)
    position = models.CharField(max_length=100, blank=True)
    profile_picture = models.ImageField(upload_to='profile_pics', blank=True, null=True)
    
    def __str__(self):
        return self.username
