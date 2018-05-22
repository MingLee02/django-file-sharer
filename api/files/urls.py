from django.conf.urls import url
from .views import FileView, FileList


urlpatterns = [
  url(r'^upload/$', FileView.as_view(), name='file-upload'),
  url(r'^list/$', FileList.as_view(), name='file-list'), 
]