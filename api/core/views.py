from rest_framework.decorators import api_view
from django.template.context_processors import csrf
from django.views.decorators.csrf import ensure_csrf_cookie
from django.http import HttpResponse

@ensure_csrf_cookie
@api_view()
def token(request):
    c = {}
    c.update(csrf(request))
    return HttpResponse('Hello world')