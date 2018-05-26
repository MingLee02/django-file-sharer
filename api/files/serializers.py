from rest_framework import serializers
from .models import File


class FileSerializer(serializers.ModelSerializer):
    class Meta():
        model = File
        fields = ('file', 'description', 'timestamp', 'title', 'is_public', 'owner')