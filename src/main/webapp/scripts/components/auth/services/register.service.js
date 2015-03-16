'use strict';

angular.module('quicookApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


