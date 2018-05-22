
(function (angular) {
    'use strict';

    var module = angular.module('auth', []);

    module.factory('authService', [
        '$http',
        function ($http) {

            var login = function (data) {
                return $http({
                    method: 'POST',
                    url: 'http://localhost:8000/auth/login/',
                    data: data
                });
            };

            var logout =  function () {
                return $http({
                    method: 'GET',
                    url: 'http://localhost:8000/auth/logout/',
                });
            };

            return {
                'login': login,
                'logout': logout,
            };

        }
    ]);

}(window.angular));