from django.contrib import admin
from .models import User, Idea, Tag

# Register your models here.
admin.site.register(User)
admin.site.register(Idea)
admin.site.register(Tag)