(function() {
    'use strict';

    angular
        .module('myTaskDemo')
        .controller('EmployeesController', EmployeesController);

    /** @ngInject */
    function EmployeesController(EmployeesService,toastr,modalService,uiGridGroupingConstants,uiGridConstants) {

        var vm = this;

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
                        vm.fnListEmployees();
                    }, function () {
                        toastr.error("Employee Deleted getting problem!!");
                    });
            });
        };

        /*--- START : Employees UI Grid ---*/



        vm.empGridOption = {
            enableFiltering : true,
//            showGridFooter: true,
            showColumnFooter : true,
            enableRowSelection: true,
            enableRowHeaderSelection: false,
            rowHeight:50,
            paginationPageSizes: [5,10, 15, 20],
            enablePaginationControls: true,
            paginationPageSize: 5
        };

        vm.empGridOption.columnDefs = [
            {
                name: 'picture',
                displayName: 'Picture',
                cellTemplate : '<div class="ngCellText ui-grid-cell-contents ng-binding ng-scope image-wrapper"><img src="{{COL_FIELD}}" " alt="" height="30" width="30"></div>',
                width : '8%',
                enableFiltering : false
            },
            { name: 'name', displayName: 'Name'},
            { name: 'age', displayName: 'Age',width: '5%'},
            { name: 'gender', displayName: 'Gender',width: '7%',enableFiltering : false},
            { name: 'email', displayName: 'Email',enableFiltering : false},
            { name: 'registered', displayName: 'Register Date',type: 'date',cellFilter: 'date:\'yyyy-MM-dd\'',enableFiltering : false},
            { name: 'balance', displayName: 'Balance',aggregationType: uiGridConstants.aggregationTypes.sum,
                treeAggregationType: uiGridGroupingConstants.aggregation.SUM,
                customTreeAggregationFinalizerFn: function( aggregation ) {
                    aggregation.rendered = aggregation.value;
                },
                enableFiltering : false
            }
        ];

        vm.empGridOption.multiSelect = false;
        vm.empGridOption.modifierKeysToMultiSelect = false;
        vm.empGridOption.noUnselect = true;
        vm.empGridOption.onRegisterApi = function( gridApi ) {
            vm.gridApi = gridApi;
        };

        /*--- END : Employees UI Grid ---*/

        vm.fnListEmployees = function(){
            vm.employees = EmployeesService.list();
            vm.empGridOption.data = vm.employees;
        };

        vm.fnInitEmployees = function(){
            vm.fnListEmployees();
        };

    }

})();