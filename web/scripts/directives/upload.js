(function (angular) {
    'use strict';

    const module = angular.module('fileUploadDirective', ['fileService']);

    module.directive('fileUploadForm', [
        'fileFactory',
        function(fileFactory) {
            return {
                restrict: 'A',
                templateUrl: '../../templates/upload-form.html',
                link: function (scope, elem) {
                    scope.data = {};
                
                    scope.upload = function () {
                        var f = document.getElementById('file').files[0];
                        scope.data.file = f;

                        var myForm = document.getElementById('file-upload');
                        var formData = new FormData(myForm);
                        angular.forEach(scope.data, function (value, key) {
                            formData.append(key, value);
                        });

                        fileFactory.uploadFile(formData)
                            .then(function () {
                                scope.uploaded = true;
                                scope.data = {};
                            });
                    };

                }
            }
        }
    ])

}(window.angular));
