(function (angular) {
    'use strict';

    var module = angular.module('fileService', []);

    module.factory('fileFactory', [
        '$http',
        '$q',
        function ($http, $q) {

            var file = {
                post: function (data) {
                    var uploadUrl = 'http://localhost:8000/file/upload/'
                    return $http.post(uploadUrl, data, {
                        transformRequest: angular.identity,
                        headers: {'Content-Type': undefined}
                    })
                }
            };

            return {
                file: file
            };
        }
    ]);

}(window.angular));