from django.urls import path
from .views import *



urlpatterns = [
    path('', getRoute, name="routes"),
    path('notes/',getNotes),
    path('note/<int:pk>/',getNote),
    path('note/<int:pk>/update/',updateNote, name='update-note'),
    path('note/<int:pk>/delete/',deleteNote, name='delete-note'),
    path('note/create/', createNote, name='create-note')
]
