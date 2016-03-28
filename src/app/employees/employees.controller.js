(function() {
    'use strict';

    angular
        .module('myTaskDemo')
        .controller('EmployeesController', EmployeesController);

    /** @ngInject */
    function EmployeesController(EmployeesService,toastr,modalService) {

        var vm = this;

        var modalOptions = {
            closeButtonText: 'Cancel',
            actionButtonText: 'Delete Employee',
            headerText: 'Delete ?',
            bodyText: 'Are you sure you want to delete this Employee?'
        };

        vm.fnListEmployees = function(){
            vm.employees = EmployeesService.list();
        };

        vm.fnRemoveEmployee = function(id){
            modalService.showModal({}, modalOptions).then(function () {
                EmployeesService.remove(id)
                    .then(function () {
                        toastr.success("Employee Deleted Successfully.");
                        vm.fnListEmployees();
                    }, function () {
                        toastr.error("Employee Deleted getting problem!!");
                    });
            });
        }

        vm.fnInitEmployees = function(){
            vm.fnListEmployees();
        };

    }

})();