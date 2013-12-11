from django.shortcuts import render

from project_manager.views import project_list

def index(request):
    return render(request, 'index.html', project_list())
