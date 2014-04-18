from django.db import models

class Task(models.Model):
    details = models.CharField(max_length = 200)
    pub_date = models.DateTimeField(auto_now_add=True)
