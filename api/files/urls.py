from django.conf.urls import url
from .views import FileView, FileList, PublicFileList


urlpatterns = [
  url(r'^upload/$', FileView.as_view(), name='file-upload'),
  url(r'^list/$', FileList.as_view(), name='file-list'),
  url(r'^public-list/$', PublicFileList.as_view(), name='public-file-list'),
]
