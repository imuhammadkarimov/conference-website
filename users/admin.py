from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .forms import CustomUserCreationForm, CustomUserChangeForm
from .models import CustomUser

class CustomUserAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = CustomUser
    list_display = ['username', 'email', 'organization', 'position', 'is_staff']
    fieldsets = UserAdmin.fieldsets + (
        ('Conference Information', {'fields': ('organization', 'position', 'bio', 'profile_picture')}),
    )
    add_fieldsets = UserAdmin.add_fieldsets + (
        ('Conference Information', {'fields': ('organization', 'position')}),
    )

admin.site.register(CustomUser, CustomUserAdmin)
