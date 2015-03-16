'use strict';

angular.module('quicookApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
