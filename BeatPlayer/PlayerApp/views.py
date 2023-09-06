from django.shortcuts import render, redirect

# import models
from django.core.paginator import Paginator
from . models import Song

def index(request):
    # create the paginator object and give it a query set to render
    # ask the database for all Songs
    # number “1” in the object definition specifies the number of songs we want on one page
    paginator= Paginator(Song.objects.all(),1)
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)
    context={"page_obj":page_obj}
    return render(request,"index.html",context)