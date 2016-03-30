(function() {
    'use strict';

    angular
        .module('myTaskDemo')
        .controller('EmployeeController', EmployeeController);

    /** @ngInject */
    function EmployeeController($stateParams,EmployeesService,toastr,$state,$filter,modalService) {

        var vm = this;
        // temporary object to store specific employee data for reset when updating
        vm.preFilledEmployeeData = {};

        // Get Employee data before updated on click event of reset button
        vm.fnReset = function(){
            vm.employee = angular.copy(vm.preFilledEmployeeData);
        };

        /*--- START : For delete employee from : Employee form --*/
        var modalOptions = {
            closeButtonText: 'Cancel',
            actionButtonText: 'Delete Employee',
            headerText: 'Delete ?',
            bodyText: 'Are you sure you want to delete this Employee?'
        };

        vm.fnRemoveEmployee = function(id){
            modalService.showModal({}, modalOptions).then(function () {
                EmployeesService.remove(id)
                    .then(function () {
                        toastr.success("Employee Deleted Successfully.");
                        $state.go('main.employees',{'view':'grid'});
                    }, function () {
                        toastr.error("Employee Deleted getting problem!!");
                    });
            });
        };
        /*--- END : For delete employee from : Employee form --*/


        vm.fnGetEmployee = function(){
            vm.employee = EmployeesService.get($stateParams.id);
            vm.employee.registered = $stateParams.id === 'add' ? new Date() : new Date($filter('date')(vm.employee.registered.split(' ')[0], "yyyy-MM-dd"));
            vm.employee.gender = $stateParams.id === 'add' ? 'male' : vm.employee.gender;
            // store the specific employee data when updating to require original data
            vm.preFilledEmployeeData = angular.copy(vm.employee);
        };

        vm.fnSaveEmployee = function(employee){
            EmployeesService.save(employee);
            toastr.success(employee.name +" saved successfully.");
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