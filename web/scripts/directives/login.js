(function (angular) {
    'use strict';

    const module = angular.module('loginUserDirective', ['auth']);

    module.directive('loginForm', [
        'authService',
        '$location',
        '$rootScope',
        function(authService, $location, $rootScope) {
            return {
                restrict: 'A',
                templateUrl: '../../templates/forms/login.html',
                link: function (scope) {
                    scope.data = {};
                
                    scope.login = function () {
                        authService.login(scope.data)
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
