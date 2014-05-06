from django.conf.urls import patterns, url

urlpatterns = patterns('bootstrap_modal.views',
    url(r'^$', 'index'),
)
