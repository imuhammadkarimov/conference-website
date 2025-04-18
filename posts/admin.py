from django.contrib import admin
from .models import Post

class PostAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'date_posted', 'is_featured')
    list_filter = ('date_posted', 'is_featured')
    search_fields = ('title', 'content')
    date_hierarchy = 'date_posted'

admin.site.register(Post, PostAdmin)
