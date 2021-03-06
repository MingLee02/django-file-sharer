from django.db import models


class File(models.Model):
    file = models.FileField(blank=False, null=False)
    description = models.TextField(null=True, blank=True)
    title = models.CharField(max_length=255, null=True, blank=True)
    timestamp = models.DateTimeField(auto_now_add=True)
    is_public = models.BooleanField(default=False)
    owner = models.ForeignKey('auth.User', related_name='files', on_delete=models.CASCADE)

    def __str__(self):
        return self.title
