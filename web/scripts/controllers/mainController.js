(function (window, angular) {
    'use strict';

    var module = angular.module('main', ['fileService']);
    
    module.controller('mainCtrl', [
        '$scope',
        'fileFactory',
        '$rootScope',
        function ($scope, fileFactory, $rootScope) {
            var checkFileListLength = function(response) {
                if(response.data) {
                    return response.data.length > 0;
                }
            }
            var getFileList = function () {
                console.log( $rootScope.Token)
                var token = $rootScope.Token;
                fileFactory.getFileList(token).then(function (response) {                        
                    if (checkFileListLength(response)) {
                        $scope.fileList = response.data;
                        $scope.displayList = true;
                    }
                });
            }

            getFileList();
        }
    ]);
}(window, window.angular));