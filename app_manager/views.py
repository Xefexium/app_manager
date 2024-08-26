from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import os

@csrf_exempt
def save_zomboid(request):
    if request.method == 'POST':
        print("Restarting project zomboid server")
        os.system('/home/ubuntu/scripts/save_zomboid.sh')
        print("Project zomboid server restarted")
        return JsonResponse({'msg': 'Server Saved!'})
    else:
        print("Request was not a POST request!")
        return JsonResponse({'msg': 'Server failed to save'})

@csrf_exempt
def restart_zomboid(request):
    if request.method == 'POST':
        print("Restarting project zomboid server")
        os.system('sudo /home/ubuntu/scripts/restart_zomboid.sh')
        print("Project zomboid server restarted")
        return JsonResponse({'msg': 'Server Restarted'})
    else:
        print("Request was not a POST request!")
        return JsonResponse({'msg': 'Server failed to restart'})

@csrf_exempt
def start_zomboid(request):
    if request.method == 'POST':
        print("Turning project zomboid server on")
        os.system('sudo /home/ubuntu/scripts/start_zomboid.sh')
        print("Project zomboid server now on")
        return JsonResponse({'msg': 'Server Started'})
    else:
        print("Request was not a POST request!")
        return JsonResponse({'msg': 'Server failed to start'})

@csrf_exempt
def stop_zomboid(request):
    if request.method == 'POST':
        print("Turning project zomboid server off")
        os.system('sudo /home/ubuntu/scripts/stop_zomboid.sh')
        print("Project zomboid server now off")
        return JsonResponse({'msg': 'Server Stopped'})
    else:
        print("Request was not a POST request!")
        return JsonResponse({'msg': 'Server failed to stop'})

@csrf_exempt
def log_zomboid(request):
    if request.method == 'GET':
        print("Fetching logs")
        logs = os.popen('journalctl --unit=projectzomboid -n 100 --no-pager').read()
        return JsonResponse({'msg': logs})
    else:
        print("Request was not a GET request!")
        return JsonResponse({'msg': 'Failed to retrieve logs'})

