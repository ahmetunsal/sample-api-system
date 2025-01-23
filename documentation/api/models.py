from django.db import models
from django.utils.text import slugify
import bleach
# Create your models here.



class Nav(models.Model):
    title = models.CharField(max_length=255)
    urlpath = models.CharField(max_length=255)

    def __str__(self):
        return self.title

class Category(models.Model):
    category_title = models.CharField(max_length=255)

    class Meta:
        verbose_name = "Category"
        verbose_name_plural = "Categories"

    def __str__(self):
        return self.category_title

class Title(models.Model):
    title = models.CharField(max_length=255)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    slug = models.SlugField(default='slug')

    def __str__(self):
        return self.title
    
    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super().save(*args, **kwargs)


class Subtitle(models.Model):
    title = models.ForeignKey(Title, on_delete=models.CASCADE)
    order = models.PositiveIntegerField(default=0)
    subtitle = models.CharField(max_length=255)
    
    def __str__(self):
        return f'{self.title} - {self.subtitle}'

class Fragment(models.Model):
    OPTION_TAGS = [
        ('p', 'Paragraf (p)',),
        ('span', 'span',),
        ('br', 'Boşluk (br)',),
        ('pre', 'Kod satırı (pre)',),
        ('strong', 'Kalın metin (strong)',),
        ('i', 'İtalik Metin (i)',),
        ('a', 'URL (a)',),
        ('h1', 'Başlık (h1)',),
        ('h2', 'Başlık (h2)',),
        ('h3', 'Başlık (h3)',),
        ('h4', 'Başlık (h4) (Kırmızı)',),
        ('h5', 'Başlık (h5) (Sarı)',),
        ('h6', 'Başlık (h6) (Yeşil)',),
    ]

    subtitle = models.ForeignKey(Subtitle, on_delete=models.CASCADE)
    order = models.IntegerField()
    tag_type = models.CharField(max_length=200,choices=OPTION_TAGS, default="p")
    content = models.TextField()

    def __str__(self):
        return f'{self.order} - {self.tag_type} {self.subtitle.title} {self.subtitle.subtitle}'



class Post(models.Model):
    title = models.CharField(max_length=255)
    slug = models.SlugField(default='slug')
    content = models.TextField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Post"
        verbose_name_plural = "Posts"
    
    def __str__(self):
        return self.title
    
    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        self.content = bleach.clean(self.content, tags=["b", "i", "a", "p", "br", "pre", "span", "strong", "h1", "h2", "h3", "h4", "h5", "h6"])
        super().save(*args, **kwargs)

class PostSlugs(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    slug = models.SlugField()