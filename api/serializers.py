from rest_framework import serializers
from .models import Post

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['id', 'title', 'description', 'image', 'video', 'scheduled_publish_date', 'likes', 'shares', 'comments']

from rest_framework import generics
from .serializers import PostSerializer
from rest_framework.response import Response
class AnalyticsDashboard(generics.ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)        