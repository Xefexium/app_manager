from django.urls import path
from . import views

urlpatterns = [
    path('start-zomboid/', views.start_zomboid, name='start-zomboid'),
    path('stop-zomboid/', views.stop_zomboid, name='stop_zomboid'),
    path('log-zomboid/', views.log_zomboid, name='log-zomboid'),
]