(function (angular) {
    'use strict';

    const module = angular.module('loginUserDirective', ['loginService']);

    module.directive('loginForm', [
        'loginFactory',
        '$location',
        '$rootScope',
        function(loginFactory, $location, $rootScope) {
            return {
                restrict: 'A',
                templateUrl: '../../templates/login-form.html',
                link: function (scope) {
                    scope.data = {};
                
                    scope.login = function () {
                        loginFactory
                            .login.post(scope.data)
                            .then(function (response) {
                                console.log(response)
                                scope.signedIn = true;
                             
                                $rootScope.user = {
                                    'usename': response.data.username,
                                    'active': response.data.active
                                }
                                
                                $location.path("signed-in");
                            });
                        
                    };
                }
            }
        }
    ])

}(window.angular));
