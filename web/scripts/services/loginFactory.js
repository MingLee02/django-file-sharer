
(function (angular) {
    'use strict';

    var module = angular.module('loginService', []);

    module.factory('loginFactory', [
        '$http',
        function ($http) {

            var login = {
                post: function (data) {
                    return $http({
                        method: 'POST',
                        url: 'http://localhost:8000/auth/login/',
                        data: data
                    });
                },
                logout: function () {
                    return $http({
                        method: 'GET',
                        url: 'http://localhost:8000/auth/logout/',
                    });
                }
            };

            return {
                login: login
            };
        }
    ]);

}(window.angular));