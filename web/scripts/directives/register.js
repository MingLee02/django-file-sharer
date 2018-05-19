(function (angular) {
    'use strict';

    const module = angular.module('registerUserDirective', ['registrationService']);

    module.directive('registerForm', [
        'registrationFactory',
        function(registrationFactory) {
            return {
                restrict: 'A',
                templateUrl: '../../templates/register-form.html',
                link: function (scope) {
                    scope.data = {};
                
                    scope.register = function () {
                        registrationFactory
                            .register.post(scope.data)
                            .then(function () {
                                scope.registered = true;
                                if (angular.isDefined(scope.onRegister)) {
                                    scope.onRegister({
                                        user: angular.copy(scope.data)
                                    });
                                }
                                scope.data = {};
                            });
                    };
                }
            }
        }
    ])

}(window.angular));
