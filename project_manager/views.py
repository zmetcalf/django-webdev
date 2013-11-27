from django.shortcuts import get_list_or_404, render

from project_manager.models import ProjectList

def project_list(request, project_id, sub_file_id):
    project = get_list_or_404(ProjectList, project_name=project_id)
    sub_file = get_list_or_404(ProjectList, sub_file_name=sub_file_id)
    stub = generate_stub(project_id, sub_file_id)
    return render(request, stub, {})

def generate_stub(project, sub_file):
    stub_list = ['project_manager/']
    stub_list.append(project)
    stub_list.append('/')
    stub_list.append(sub_file)
    stub_list.append('.html')
    return ''.join(stub_list)

