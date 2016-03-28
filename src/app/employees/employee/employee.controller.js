(function() {
    'use strict';

    angular
        .module('myTaskDemo')
        .controller('EmployeeController', EmployeeController);

    /** @ngInject */
    function EmployeeController($stateParams,EmployeesService,toastr,$state) {

        var vm = this;

        vm.fnGetEmployee = function(){
            vm.employee = EmployeesService.get($stateParams.id);
        };

        vm.fnSaveEmployee = function(employee){
            EmployeesService.save(employee);
            toastr.success(employee.name+" saved successfully.");
            $state.go('main.employees');
        };

        vm.fnInitEmployee = function(){
            vm.fnGetEmployee();
        };
    }

})();