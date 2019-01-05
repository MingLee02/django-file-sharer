(function (angular) {
    'use strict';

    var module = angular.module('fileService', []);

    module.factory('fileFactory', [
        '$http',
        '$q',
        function ($http, $q) {

            var uploadFile = function (data, token) {
                return $http({
                    method: 'POST',
                    url: 'http://localhost:8000/file/upload/',
                    data: data,
                    transformRequest: angular.identity,
                    headers: {
                        'Content-Type': undefined,
                        'Authorization': 'Token ' + token.token
                    }
                });
            };

            var getFileList = function (token) {
                return $http({
                    method: 'GET',
                    url: 'http://localhost:8000/file/list/',
                    headers: {Authorization: 'Token ' + token.token},
                });
            }

            var getPublicFileList = function (token) {
                return $http({
                    method: 'GET',
                    url: 'http://localhost:8000/file/public-list/',
                });
            }

            return {
                'uploadFile': uploadFile,
                'getFileList': getFileList,
                'getPublicFileList': getPublicFileList
            };
        }
    ]);

}(window.angular));
