from django.conf.urls import patterns, include, url

from django.contrib import admin

from django_webdev import views

admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'django_webdev.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', views.index, name='index'),

    url(r'^project/', include('project_manager.urls')),
)
