from django.test import TestCase
from .. import serializers


class RegistrationSerializerTest(TestCase):
    def setUp(self):
        super(RegistrationSerializerTest, self).setUp()
        self.data = {
            'name': 'Robert',
            'email': 'Bobby.Tables+327@xkcd.com',
            'password': 'Sup3RSecre7paSSw0rD',
            'password2': 'Sup3RSecre7paSSw0rD',
        }

    def test_deserialize(self):
        serializer = serializers.RegistrationSerializer(data=self.data)
        self.assertTrue(serializer.is_valid())

        validated_data = serializer.validated_data
        self.assertEqual(validated_data['name'], self.data['name'])
        self.assertEqual(validated_data['email'], self.data['email'].lower())
        self.assertEqual(validated_data['password'], self.data['password'])

    # def test_deserialize_invalid_new_password(self):
    #     self.data['password'] = '2short'

    #     serializer = serializers.RegistrationSerializer(data=self.data)
    #     self.assertFalse(serializer.is_valid())
    #     self.assertIn('password', serializer.errors)

    # def test_deserialize_mismatched_passwords(self):
    #     self.data['password2'] = 'different_password'
    #     serializer = serializers.RegistrationSerializer(data=self.data)
    #     self.assertFalse(serializer.is_valid())
    #     self.assertIn('password2', serializer.errors)

    # def test_deserialize_no_email(self):
    #     self.data['email'] = None

    #     serializer = serializers.RegistrationSerializer(data=self.data)
    #     self.assertFalse(serializer.is_valid())
    #     self.assertIn('email', serializer.errors)
