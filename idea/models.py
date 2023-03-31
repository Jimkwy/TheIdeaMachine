from unittest.util import _MAX_LENGTH
from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.
class User(AbstractUser):
    birtdhay = models.DateField(auto_now_add=False, blank=True, null=True)
    pass

class Idea(models.Model):
    user = models.ForeignKey('User', on_delete=models.CASCADE, related_name='author')
    subject = models.CharField(max_length=256, blank=False)
    body = models.TextField(blank=False)
    img = models.ImageField('Image', upload_to='images/', blank=True, null=True)
    tag = models.ForeignKey('tag', on_delete=models.SET_NULL, related_name='group', null=True)
    bonus  = models.CharField(max_length=256, blank=True)
    timestamp = models.DateTimeField(auto_now_add=True)
    archived = models.BooleanField(default=False)

    def serialize(self):
        return {
            "id": self.id,
            "subject": self.subject,
            "body": self.body,
            "tag" : self.tag.tag,
            "bonus" : self.bonus,
            "timestamp": self.timestamp.strftime("%b %d %Y, %I:%M %p"),
            "archived": self.archived
        }

    def __str__(self):
        return f"{self.subject} in {self.tag}"

class Tag(models.Model):
    user = models.ForeignKey('User', on_delete=models.CASCADE, related_name='creator')
    tag = models.CharField(max_length=256, blank=False)

    def serializer(self):
        return {
            "id": self.id,
            "tag": self.tag
        }

    def __str__(self):
        return f"{self.tag}"
