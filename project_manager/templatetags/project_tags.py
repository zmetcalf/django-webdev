from django import template

from project_manager import views

register = template.Library

@register.simple_tag
def project_list():
    return views.project_list()
