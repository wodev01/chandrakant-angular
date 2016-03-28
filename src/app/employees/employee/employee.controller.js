(function() {
    'use strict';

    angular
        .module('myTaskDemo')
        .controller('EmployeeController', EmployeeController);

    /** @ngInject */
    function EmployeeController($stateParams,EmployeesService,toastr,$state,$filter) {

        var vm = this;

        vm.fnGetEmployee = function(){
            vm.employee = EmployeesService.get($stateParams.id);
            vm.employee.registered = $stateParams.id === 'add' ? new Date() : new Date($filter('date')(vm.employee.registered.split(' ')[0], "yyyy-MM-dd"));
            vm.employee.gender = $stateParams.id === 'add' ? 'male' : vm.employee.gender;
        };

        vm.fnSaveEmployee = function(employee){
            EmployeesService.save(employee);
            toastr.success(employee.name +" saved successfully.");
            $state.go('main.employees');
        };

        vm.fnInitEmployee = function(){
            vm.fnGetEmployee();
        };

        vm.popup2 = {
            opened: false
        };

        vm.open2 = function() {
            vm.popup2.opened = true;
        };


    }

})();