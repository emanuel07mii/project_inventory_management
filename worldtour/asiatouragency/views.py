from django.shortcuts import render
from .models import Tour
# from django.http import HttpResponse

def index(request):
    tours = Tour.objects.all()
    context = {
        'tours': tours
    }
    return render(request, 'tours/index.html', context)