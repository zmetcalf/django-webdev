from django.conf.urls import patterns, url

urlpatterns = patterns('backbone_ajax.views',
    url(r'^$', 'index'),
)
