(function() {
    'use strict';

    angular
        .module('myTaskDemo')
        .controller('LoginController', LoginController);

    /** @ngInject */
    function LoginController($state, toastr,$cookies) {

        var vm = this;
        vm.user = {};

        vm.login = function (userObj) {
            if(userObj.email == 'demo@demo.com' && userObj.password === 'demo'){
                $cookies.put("auth_token",vm.fnToken());
                $state.go('main.dashboard');
            }else{
                toastr.error('Invalid Username and password');
            }
        };

        vm.fnToken = function() {
            function s4() {
                return Math.floor((1 + Math.random()) * 0x10000)
                    .toString(16)
                    .substring(1);
            }
            return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
                s4() + '-' + s4() + s4() + s4();
        };

    }

})();