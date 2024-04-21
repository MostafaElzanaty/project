from django.db import models

# Create your models here.



class Note(models.Model):
    body  = models.TextField(null=True, blank=True)
    update = models.DateTimeField(auto_now=True) # takes a time stamp on creation and on save
    created = models.DateTimeField(auto_now_add=True) # takes a time stapm only once in creation
    

    def __str__(self):
        return self.body[0:50]
    