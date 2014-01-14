from django.conf.urls import patterns, url

urlpatterns = patterns('bs_brochure_site.views',
    url(r'^$', 'index',  name='index'),
)
