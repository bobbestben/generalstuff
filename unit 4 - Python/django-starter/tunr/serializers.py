from rest_framework import serializers
from .models import Artist, Song

class SongSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Song
        fields = (
            "artist",
            "title",
            "album",
        )
        depth = 1

class ArtistSerializer(serializers.HyperlinkedModelSerializer):
    songs = SongSerializer(many=True)
    class Meta:
        model = Artist
        fields = (
            "id",
            "photo_url",
            "nationality",
            "name",
            "songs",
        )
        depth = 1

