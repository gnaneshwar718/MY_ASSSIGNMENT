from rest_framework import generics
from .models import Post
from .serializers import PostSerializer

class PostListCreateView(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class PostRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class AnalyticsDashboard(generics.ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        analytics_data = []
        for post in queryset:
            analytics_data.append({
                'postId': post.id,
                'likes': post.likes,
                'shares': post.shares,
                'comments': post.comments,
            })
        return analytics_data