from django.urls import path, include
from . import views
from rest_framework.urlpatterns import format_suffix_patterns
# from django.conf.urls import url
from .views import *

urlpatterns = [
    path('', UserView.as_view(), name="allusers"), #setting users/ as endpoint for react view class
    path('<int:user_id>',UserbyIDView.as_view(),name='userbyid')
]

urlpatterns = format_suffix_patterns(urlpatterns)