
(function (angular) {
    'use strict';
    var module = angular.module('app', [
        'ngRoute'
    ]);

    module.config([
        '$routeProvider',
        function ($routeProvider) {
            $routeProvider.when('/', {
                templateUrl: '../templates/home.html',
                name: 'home'
            });
        }
    ]);
}(window.angular));
