from django.shortcuts import render
from django.http import HttpResponse
from .models import Users

# Create your views here.


def home(request):

    users = Users.objects.all()
    return render(request, 'users/index.html', {'users': users})
