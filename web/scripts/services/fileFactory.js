(function (angular) {
    'use strict';

    var module = angular.module('fileService', []);

    module.factory('fileFactory', [
        '$http',
        '$q',
        function ($http, $q) {

            var uploadFile = function (data, token) {
                console.log('iom')
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

            return {
                'uploadFile': uploadFile,
                'getFileList': getFileList
            };
        }
    ]);

}(window.angular));