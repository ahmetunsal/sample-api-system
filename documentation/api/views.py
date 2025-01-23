from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .models import *
from .serializers import *
from rest_framework.permissions import IsAuthenticated

# Create your views here.


class PostViewSet(ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class CategoryViewSet(ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class NavViewSet(ModelViewSet):
    queryset = Nav.objects.all()
    serializer_class = NavSerializer

class PostSlugViewSet(ModelViewSet):
    queryset = PostSlugs.objects.all()
    serializer_class = PostSlugSerializer


class TitleViewSet(ModelViewSet):
    queryset = Title.objects.all()
    serializer_class = TitleSerializer

class SubtitleViewSet(ModelViewSet):
    queryset = Subtitle.objects.all()
    serializer_class = SubtitleSerializer

class FragmentViewSet(ModelViewSet):
    queryset = Fragment.objects.all()
    serializer_class = FragmentSerializer



