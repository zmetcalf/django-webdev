from django.db import models

class ProjectList(models.Model):
    def __unicode__(self):
        return self.project_name

    project_name = models.CharField(max_length=20)
    sub_file_name = models.CharField(max_length=20)
