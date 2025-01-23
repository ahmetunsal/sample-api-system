from django.contrib import admin
from .models import *

# Register your models here.

admin.site.register(Category)
admin.site.register(Post)
admin.site.register(Title)
admin.site.register(Subtitle)


@admin.register(Fragment)
class AdminFragment(admin.ModelAdmin):
    list_display = ['subtitle', 'order']
    list_filter = ['subtitle', 'order']

