
(function (angular) {
    'use strict';
    var module = angular.module('app', [
        'ngRoute',
        'registerUserDirective',
        'loginUserDirective',
        'fileUploadDirective',
        'navigation',
        'ngCookies',
        'main'
    ]);

    module.config([
       '$routeProvider',
        function ($routeProvider) {
            $routeProvider
                .when("/", {
                    templateUrl: '../templates/home.html',
                    name: 'home'
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

    module.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.xsrfCookieName = 'csrftoken';
        $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
        $httpProvider.defaults.withCredentials = true;
    }]);

	module.run( function run( $http, $cookies ) {
		$http({
			method : "GET",
			url : 'http://localhost:8000/token/',
		}).then(function (response) {
			$http.defaults.headers.post['X-CSRFToken'] = $cookies.get('csrftoken');
		});
	})
}(window.angular));