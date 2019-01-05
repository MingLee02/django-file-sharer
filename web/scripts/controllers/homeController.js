(function (window, angular) {
    'use strict';

    var module = angular.module('home', []);

    module.controller('homeCtrl', [
        '$rootScope',
        '$scope',
        'fileFactory',
        function ($rootScope, $scope, fileFactory) {
            $rootScope.$on("registered", function() {
                $scope.registered = true;
            });

            var getFileList = function () {
                fileFactory.getPublicFileList().then(function (response) {
                    $scope.fileList = response.data;
                });
            }

            getFileList();

        }
    ]);
}(window, window.angular));
