(function() {
    'use strict';

    angular
        .module('myTaskDemo')
        .controller('EmployeeController', EmployeeController);

    /** @ngInject */
    function EmployeeController($stateParams,EmployeesService,toastr,$state,$filter,modalService,$log) {

        var vm = this;
        // temporary object to store specific employee data for reset when updating
        vm.preFilledEmployeeData = {};

        // Get Employee data before updated on click event of reset button
        vm.fnReset = function(){
            vm.employee = angular.copy(vm.preFilledEmployeeData);
        };

        /*--- START : For delete employee from : Employee form --*/
        vm.fnRemoveEmployee = function(employee){
            var modalOptions = {
                closeButtonText: 'Cancel',
                actionButtonText: 'Delete Employee',
                headerText: 'Delete '+employee.name +' ?',
                bodyText: 'Are you sure you want to delete this Employee?'
            };

            modalService.showModal({}, modalOptions).then(function () {
                EmployeesService.remove(employee._id)
                    .then(function () {
                        toastr.success(employee.name+" Deleted Successfully.");
                        $state.go('main.employees',{'view':'grid'});
                    }, function () {
                        toastr.error("Employee Deleted getting problem!!");
                    });
            });
        };
        /*--- END : For delete employee from : Employee form --*/


        vm.fnGetEmployee = function(){
            EmployeesService.get($stateParams.id)
                .then(function(emp){
                    vm.employee = emp;
                    $log.log("Get employee: ",emp);
                    vm.employee.registered = $stateParams.id === 'add' ? new Date() : new Date($filter('date')(vm.employee.registered, "yyyy-MM-dd"));
                    vm.employee.gender = $stateParams.id === 'add' ? 'male' : vm.employee.gender;
                    // store the specific employee data when updating to require original data
                    vm.preFilledEmployeeData = angular.copy(vm.employee);
                });
        };

        vm.fnSaveEmployee = function(employee){
            EmployeesService.save(employee)
                .then(function () {
                    toastr.success(employee.name +" saved successfully.");
                }, function () {
                    toastr.error("For employee saving problem!!");
                });
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