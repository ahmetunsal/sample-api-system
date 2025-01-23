from rest_framework.serializers import ModelSerializer
from .models import *



class PostSerializer(ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'


class CategorySerializer(ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class NavSerializer(ModelSerializer):
    class Meta:
        model = Nav
        fields = '__all__'

class PostSlugSerializer(ModelSerializer):
    class Meta:
        model = PostSlugs
        fields = '__all__'


class TitleSerializer(ModelSerializer):
    class Meta:
        model = Title
        fields = '__all__'

class SubtitleSerializer(ModelSerializer):
    class Meta:
        model = Subtitle
        fields = '__all__'


class FragmentSerializer(ModelSerializer):
    class Meta:
        model = Fragment
        fields = '__all__'



