
(function (angular) {
    'use strict';

    var module = angular.module('auth', []);

    module.factory('authService', [
        '$http',
        function ($http) {

            var loginGet = function () {
                return $http({
                    method: 'POST',
                    url: 'http://localhost:8000/api-token-auth/',
                    data: {
                        'username': 'me',
                        'password': 'me'
                    }
                });
            };

            var login = function (data, token) {
                return $http({
                    method: 'POST',
                    url: 'http://localhost:8000/auth/login/',
                    headers: {Authorization: 'Bearer ' + token.token},
                });
            };

            var logout =  function () {
                return $http({
                    method: 'GET',
                    url: 'http://localhost:8000/auth/logout/',
                });
            };

            return {
                'loginGet': loginGet,
                'login': login,
                'logout': logout,
            };

        }
    ]);

}(window.angular));