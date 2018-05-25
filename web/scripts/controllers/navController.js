(function (window, angular) {
    'use strict';

    var module = angular.module('navigation', ['ngRoute', 'auth', 'ngCookies']);

    module.controller('navCtrl', [
        '$scope',
        'authService',
        '$rootScope',
        '$location',
        '$cookies',
        function ($scope, authService, $rootScope, $location, $cookies) {          
            $scope.logout = function () {
                authService.logout()
                    .then(function (response) { 
                        $cookies.remove('csrftoken');                       
                        $location.path("/");
                    });
            };
        }
    ]);
}(window, window.angular));