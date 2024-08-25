from django.urls import path
from . import views

urlpatterns = [
    path('api/start-zomboid/', views.start_zomboid, name='start-zomboid'),
    path('api/stop-zomboid/', views.stop_zomboid, name='stop_zomboid'),
    path('api/log-zomboid/', views.log_zomboid, name='log-zomboid'),
]