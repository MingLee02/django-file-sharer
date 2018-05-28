from rest_framework import generics, response, status, views
from rest_framework.authtoken.models import Token
from rest_framework.views import APIView
from . import serializers


class UserRegister(generics.CreateAPIView):
    serializer_class = serializers.RegistrationSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            return self.is_valid(serializer)
        return self.is_invalid(serializer)

    def is_invalid(self, serializer):
        return response.Response(
            data=serializer.errors,
            status=status.HTTP_400_BAD_REQUEST,
        )

    def is_valid(self, serializer):
        user = serializer.save()
        ok_message = 'Your account has been created.'
        token, created = Token.objects.get_or_create(user=user)

        return response.Response(
            data={'data': ok_message},
            status=status.HTTP_201_CREATED,
        )