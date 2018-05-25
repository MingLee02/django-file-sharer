(function (window, angular) {
    'use strict';

    var module = angular.module('main', ['fileService']);
    
    module.controller('mainCtrl', [
        '$scope',
        'fileFactory',
        function ($scope, fileFactory) {
            var checkFileListLength = function(response) {
                if(response.data) {
                    return response.data.length > 0;
                }
            }
            var getFileList = function () {
                fileFactory.getFileList().then(function (response) {                        
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