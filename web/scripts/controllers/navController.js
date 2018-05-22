(function (window, angular) {
    'use strict';

    var module = angular.module('navigation', ['ngRoute', 'auth']);

    module.controller('navCtrl', [
        '$scope',
        'authService',
        '$rootScope',
        '$location',
        function ($scope, authService, $rootScope, $location) {
            
            $scope.logout = function () {
                authService.logout()
                    .then(function (response) {                        
                        $location.path("/");
                    });
            };
        }
    ]);
}(window, window.angular));