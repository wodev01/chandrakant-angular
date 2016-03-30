(function() {
    'use strict';

    angular
        .module('myTaskDemo')
        .controller('EmployeesController', EmployeesController);

    /** @ngInject */
    function EmployeesController($stateParams,EmployeesService,toastr,modalService,uiGridGroupingConstants,uiGridConstants,$state,$uibModal,$log) {
        var vm = this;
        vm.fnRemoveEmployee = function(id){
            var modalDeleteOptions = {
                closeButtonText: 'Cancel',
                actionButtonText: 'Delete Employee',
                headerText: 'Delete ?',
                bodyText: 'Are you sure you want to delete this Employee?'
            };
            modalService.showModal({}, modalDeleteOptions).then(function () {
                EmployeesService.remove(id)
                    .then(function () {
                        toastr.success("Employee Deleted Successfully.");
                        vm.fnListEmployees();
                    }, function () {
                        toastr.error("Employee Deleted getting problem!!");
                    });
            });
        };

        vm.fnModalViewEmployee = function(employee,size){
            vm.animationsEnabled = true;
            var modalInstance = $uibModal.open({
                animation: vm.animationsEnabled,
                templateUrl: 'app/employees/view/employeeviewmodal.html',
                controller: 'EmployeeViewModalController as emp',
                size: size,
                resolve: {
                    employee: function () {
                        $log.log(employee._id);
                        return employee;
                    }
                }
            });
        }

        /*--- START : Employees UI Grid ---*/

        vm.empGridOption = {
            enableFiltering : true,
            enableGridMenu: true,
            enableSelectAll: true,
            exporterCsvFilename: 'EmployeeDetails.csv',
            exporterPdfFilename: 'EmployeeDetails.pdf',
            exporterPdfDefaultStyle: {fontSize: 9},
            exporterPdfTableStyle: {margin:30},
            exporterPdfTableHeaderStyle: {fontSize: 12, bold: true, italics: true},
            exporterPdfHeader: { text: "Employees Details", style: 'headerStyle' },
            exporterPdfFooter: function ( currentPage, pageCount ) {
                return { text: currentPage.toString() + ' of ' + pageCount.toString(), style: 'footerStyle' };
            },
            exporterPdfCustomFormatter: function ( docDefinition ) {
                docDefinition.styles.headerStyle = { fontSize: 22, bold: true };
                docDefinition.styles.footerStyle = { fontSize: 10, bold: true };
                return docDefinition;
            },
            exporterPdfOrientation: 'portrait',
            exporterPdfPageSize: 'A4',
            exporterPdfMaxGridWidth: 500,
            exporterCsvLinkElement: angular.element(document.querySelectorAll(".custom-csv-link-location")),
            onRegisterApi : function( gridApi ) {
                vm.gridApi = gridApi;
            },
            multiSelect : false,
            showColumnFooter : true,
            enableRowSelection: true,
            enableRowHeaderSelection: false,
            rowHeight:50,
            paginationPageSizes: [5,10, 15, 20],
            enablePaginationControls: true,
            paginationPageSize: 5,
            appScopeProvider: {
                showEmployeeDetails : function(row){
                    $state.go('main.employee',{'id':row.entity._id});
                }
            },
            rowTemplate: "<div ng-dblclick=\"grid.appScope.showEmployeeDetails(row)\" ng-repeat=\"(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name\" class=\"ui-grid-cell\" ng-class=\"{ 'ui-grid-row-header-cell': col.isRowHeader }\" ui-grid-cell></div>"
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
            { name: 'registered', displayName: 'Register Date',width:'10%',type: 'date',cellFilter: 'date:\'yyyy-MM-dd\'',enableFiltering : false},
            { name: 'balance', displayName: 'Balance',width:'10%',aggregationType: uiGridConstants.aggregationTypes.sum,
                treeAggregationType: uiGridGroupingConstants.aggregation.SUM,
                customTreeAggregationFinalizerFn: function( aggregation ) {
                    aggregation.rendered = aggregation.value;
                },
                enableFiltering : false
            }
        ];


        /*--- END : Employees UI Grid ---*/

        vm.fnListEmployees = function(){
            vm.employees = EmployeesService.list();
            vm.empGridOption.data = vm.employees;
        };

        vm.fnReturnTabIndex = function(view){

        };

        vm.fnInitEmployees = function(){
            var tabViewsArr = ['grid', 'list', 'ui-grid'];
            vm.selectedTabIndex = tabViewsArr.indexOf($stateParams.view) + 1;
            vm.fnListEmployees();
        };

    }

})();