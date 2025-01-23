from django.urls import path, include
from rest_framework.routers import DefaultRouter
from api.views import *

router = DefaultRouter()
router.register(r'category', CategoryViewSet, basename="category_viewset")
router.register(r'post', PostViewSet, basename="post_viewset")
router.register(r'nav-list', NavViewSet, basename="navigation_viewset")
router.register(r'post-slug', PostSlugViewSet, basename="post_slug_viewset")
router.register(r'title', TitleViewSet, basename="title_viewset")
router.register(r'subtitle', SubtitleViewSet, basename="subtitle_viewset")
router.register(r'fragment', FragmentViewSet, basename="fragment_viewset")

urlpatterns = [
    path('', include(router.urls))
]



