from django.conf.urls import patterns, url

urlpatterns = patterns('project_manager.views',
    url(r'^(?P<project_id>[a-zA-Z0-9_.-]+)/(?P<sub_file_id>[a-zA-Z0-9_.-]+)/$',
        'project', name='project'),
)
