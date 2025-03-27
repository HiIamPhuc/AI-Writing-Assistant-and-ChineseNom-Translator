from django.http import HttpResponse

def homepage(request):
    return HttpResponse("Hi, this is a homepage.")

def about(request):
    return HttpResponse("About the website.")