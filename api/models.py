from django.db import models
from django.contrib.auth.models import User

class Post(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='images/', null=True, blank=True)
    video = models.FileField(upload_to='videos/', null=True, blank=True)
    scheduled_publish_date = models.DateTimeField()

    # Additional fields for likes, shares, and comments
    likes = models.PositiveIntegerField(default=0)
    shares = models.PositiveIntegerField(default=0)
    comments = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.title

class Like(models.Model):
    post = models.ForeignKey(Post, related_name='likes_set', on_delete=models.CASCADE)
    user = models.ForeignKey(User, related_name='likes_set', on_delete=models.CASCADE)

class Share(models.Model):
    post = models.ForeignKey(Post, related_name='shares_set', on_delete=models.CASCADE)
    user = models.ForeignKey(User, related_name='shares_set', on_delete=models.CASCADE)

class Comment(models.Model):
    post = models.ForeignKey(Post, related_name='comments_set', on_delete=models.CASCADE)
    user = models.ForeignKey(User, related_name='comments_set', on_delete=models.CASCADE)
    text = models.TextField()