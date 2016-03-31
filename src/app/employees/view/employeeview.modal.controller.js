(function() {
    'use strict';

    angular
        .module('myTaskDemo')
        .controller('EmployeeViewModalController', EmployeeViewModalController);

    function EmployeeViewModalController($uibModalInstance,$filter,employee,EmployeesService,$state,toastr,$log){
        var vm = this;
        // temporary object to store specific employee data for reset when updating
        vm.modalPreFilledEmployeeData = {};
        vm.edit = false;
        vm.title = '';

        /*--- START : For delete employee from : Employee form --*/
        vm.fnRemoveModalEmployee = function(employee){
            EmployeesService.remove(employee._id)
                    .then(function () {
                        toastr.success(employee.name+" Deleted Successfully.");
                        vm.fnClose();
                    }, function () {
                        toastr.error("Employee Deleted getting problem!!");
                    });

        };
        /*--- END : For delete employee from : Employee form --*/

        vm.fnEditSave = function(employee){
            EmployeesService.save(employee)
                .then(function () {
                    toastr.success(employee.name +" saved successfully.");
                    vm.title = vm.employee.name;
                    vm.edit = false;
                    vm.fnToggleView();
                    vm.fnClose();
                }, function () {
                    toastr.error("For employee saving problem!!");
                });
        };

        vm.fnToggleView = function(){
            if(vm.edit==true){
               $log.log("In If: ",vm.edit);
               vm.employee = angular.copy(vm.modalPreFilledEmployeeData);
            }
            vm.edit = !vm.edit;
            $log.log("Out If: ",vm.edit);
        };


        vm.fnClose = function () {
            $uibModalInstance.close();
        };

        vm.popup2 = {
            opened: false
        };

        vm.open2 = function() {
            vm.popup2.opened = true;
        };

        vm.fnInitModalEmployee = function(){
            // Passing employee data from EmployeesController
            vm.employee = employee;
            vm.employee.registered = new Date($filter('date')(vm.employee.registered, "yyyy-MM-dd"));
            vm.title = vm.employee.name;
            // store the specific employee data when updating to require original data
            vm.modalPreFilledEmployeeData = angular.copy(vm.employee);

        }
    }
})();