(function (angular) {
    'use strict';

    const module = angular.module('registerUserDirective', ['registrationService']);

    module.directive('registerForm', [
        'registrationFactory',
        '$location',
        '$rootScope',
        function(registrationFactory, $location, $rootScope) {
            return {
                restrict: 'A',
                templateUrl: '../../templates/forms/register.html',
                link: function (scope) {
                    scope.errors = [];

                    scope.register = function () {
                        scope.errors = [];
                        registrationFactory
                            .register.post(scope.data)
                            .then(function () {
                                scope.data = {}
                                $rootScope.$broadcast("registered");
                                $location.path("/");
                            })
                            .catch(function(response) {
                                angular.forEach(response.data, function(value, key) {
                                    scope.errors.push(value[0]);
                                });
                            });
                    };
                }
            }
        }
    ])

}(window.angular));
