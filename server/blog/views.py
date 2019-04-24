from django.http import HttpResponse
from django.shortcuts import render

def index(request):
    return HttpResponse('Under construction')

def react(request):
    context = {'msg': 'Hello World'}
    return render(request, 'react.html', context)
