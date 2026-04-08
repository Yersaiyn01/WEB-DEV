from django.db import models

class Author(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    birth_date = models.DateField()
    nationality = models.CharField(max_length=50)
    bio = models.TextField(blank=True)


class Book(models.Model):
    title = models.CharField(max_length=100)
    isbn = models.CharField(max_length=13,unique=True)
    pages = models.IntegerField()
    price = models.FloatField()
    stock = models.IntegerField()
    published_date = models.DateField()
    is_available = models.BooleanField(default=True)
    author = models.ForeignKey(Author,on_delete=models.CASCADE,related_name='books')
    
    def __str__(self):
        return self.title
