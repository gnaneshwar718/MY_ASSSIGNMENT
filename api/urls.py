from django.urls import path
from .views import PostListCreateView, PostRetrieveUpdateDestroyView, AnalyticsDashboard

urlpatterns = [
    path('api/posts/', PostListCreateView.as_view(), name='post-list-create'),
    path('api/posts/<int:pk>/', PostRetrieveUpdateDestroyView.as_view(), name='post-detail'),
    path('api/posts/analytics/', AnalyticsDashboard.as_view(), name='analytics-dashboard'),
]