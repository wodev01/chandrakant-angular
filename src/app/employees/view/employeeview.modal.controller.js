(function() {
    'use strict';

    angular
        .module('myTaskDemo')
        .controller('EmployeeViewModalController', EmployeeViewModalController);

    function EmployeeViewModalController($uibModalInstance,$filter,employee){
        var vm = this;
        vm.employee = employee;

        vm.fnClose = function () {
            $uibModalInstance.close();
        };

        vm.fnCancel = function () {
            $uibModalInstance.dismiss('cancel');
        };

        vm.popup2 = {
            opened: false
        };

        vm.open2 = function() {
            vm.popup2.opened = true;
        };

        vm.fnInitModalEmployee = function(){
            vm.employee.registered = new Date($filter('date')(vm.employee.registered.split(' ')[0], "yyyy-MM-dd"));
        }
    }
})();