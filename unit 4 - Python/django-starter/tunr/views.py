from django.shortcuts import render, redirect

from .models import Artist, Song
from .forms import ArtistForm, SongForm

from django.http import JsonResponse

def artist_list(request):
    artists = Artist.objects.all()
    return render(request, "tunr/artist_list.html", {"artists": artists})


def artist_detail(request, id):
    artist = Artist.objects.get(pk=id)
    return render(request, "tunr/artist_detail.html", {"artist": artist})

def artist_create(request):
    if request.method == "POST":
        form = ArtistForm(request.POST)
        if form.is_valid():
            artist = form.save()
            return redirect("artist_detail", id=artist.id)
    else:
        form = ArtistForm()
    return render(request, "tunr/artist_form.html", {"form": form})

def artist_edit(request, id):
    artist = Artist.objects.get(pk=id)
    if request.method == "POST":
        form = ArtistForm(request.POST, instance=artist)
        if form.is_valid():
            artist = form.save()
            return redirect("artist_detail", id=artist.id)
    else:
        form = ArtistForm(instance=artist)
    return render(request, "tunr/artist_form.html", {"form": form})

def song_create(request):
    if request.method == "POST":
        form = SongForm(request.POST)
        if form.is_valid():
            song = form.save()
            return redirect("song_detail", id=song.id)
    else:
        form = SongForm()
    return render(request, "tunr/song_form.html", {"form": form})

def song_edit(request, id):
    song = Song.objects.get(pk=id)
    if request.method == "POST":
        form = SongForm(request.POST, instance=song)
        if form.is_valid():
            song = form.save()
            return redirect("song_detail", id=song.id)
    else:
        form = SongForm(instance=song)
    return render(request, "tunr/song_form.html", {"form": form})


def song_list(request):
    songs = Song.objects.all()
    return render(request, "tunr/song_list.html", {"songs": songs})


def song_detail(request, id):
    song = Song.objects.get(pk=id)
    return render(request, "tunr/song_detail.html", {"song": song})

def artist_delete(request, id):
    Artist.objects.get(id=id).delete()
    return redirect("artist_list")

def song_delete(request, id):
    Song.objects.get(id=id).delete()
    return redirect("song_list")

# api request
# jsonReponse only accepts dictionary -> if is a list/array
# need set parameter save=false

def artist_list_json(request):
    artists = Artist.objects.all().values('id', 'name')
    return JsonResponse(list(artists), safe=False)


from rest_framework import generics
from .serializers import ArtistSerializer, SongSerializer

class ArtistList(generics.ListCreateAPIView):
    queryset = Artist.objects.all()
    serializer_class = ArtistSerializer


class ArtistDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Artist.objects.all()
    serializer_class = ArtistSerializer

class SongList(generics.ListCreateAPIView):
    queryset = Song.objects.all()
    serializer_class = SongSerializer


class SongDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Song.objects.all()
    serializer_class = SongSerializer

