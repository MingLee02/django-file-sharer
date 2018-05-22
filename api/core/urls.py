from django.conf.urls import include, url
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from .views import token



urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^users/', include('users.urls')),
    url(r'^file/', include('files.urls')),
    url(r'^auth/', include('rest_framework.urls')),
    url(r'^token/', token, name='token'),
]

urlpatterns +=  static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
