from django.conf.urls import patterns, include, url

from django.contrib import admin

from django_webdev import views

admin.autodiscover()

js_info_dict = {
    'packages': ('project_manager',),
}

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'django_webdev.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', views.index, name='index'),

    url(r'^project/', include('project_manager.urls')),
    url(r'^brochure/', include('bs_brochure_site.urls')),
    url(r'^backbone_ajax/', include('backbone_ajax.urls')),
    url(r'^bootstrap_modal/', include('bootstrap_modal.urls')),
    (r'^jsi18n/$', 'django.views.i18n.javascript_catalog', js_info_dict),
)
