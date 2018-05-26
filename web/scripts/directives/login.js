(function (angular) {
    'use strict';

    const module = angular.module('loginUserDirective', ['auth']);

    module.directive('loginForm', [
        'authService',
        '$location',
        function(authService, $location) {
            return {
                restrict: 'A',
                templateUrl: '../../templates/forms/login.html',
                link: function (scope) {
                    scope.data = {};
                
                    scope.login = function () {
                        authService.login(scope.data)
                            .then(function (response) {
                                scope.signedIn = true;
                                $location.path("signed-in");
                            });
                        
                    };
                }
            }
        }
    ])

}(window.angular));
