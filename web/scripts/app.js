
(function (angular) {
    'use strict';
    var module = angular.module('app', [
        'ngRoute',
        'registerUserDirective',
        'loginUserDirective',
        'fileUploadDirective',
        'navigation',
        'ngCookies',
        'main',
        'home'
    ]);

    module.config([
       '$routeProvider',
        function ($routeProvider) {
            $routeProvider
                .when("/", {
                    templateUrl: '../templates/home.html',
                    name: 'home',
                    controller: 'homeCtrl'
                })
                .when("/register", {
                    templateUrl: '../templates/register.html',
                    name: 'register'
                })
                .when("/signed-in", {
                    templateUrl: '../templates/logged-in-home.html',
                    name: 'logged-in-home',
                    controller: 'mainCtrl'
                });
        }
    ]);
}(window.angular));
