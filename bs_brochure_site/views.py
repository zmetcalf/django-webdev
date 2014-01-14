from django.shortcuts import render

def index(request):
    return render(request, 'bs_brochure_site/index.html')
