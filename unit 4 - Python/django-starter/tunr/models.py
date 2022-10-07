from django.db import models

# Create your models here.

# tunr/models.py
## here we using inbuilt model methods which will convert to sql statements by django
class Artist(models.Model):
    # name VARCHAR(100)
    name = models.CharField(max_length=100)
    nationality = models.CharField(max_length=100)

    # photo_url TEXT
    photo_url = models.TextField()

    # id will be automatically created

    def __str__(self):
        return self.name

class Song(models.Model):
    artist = models.ForeignKey(Artist, on_delete=models.CASCADE, related_name="songs")

