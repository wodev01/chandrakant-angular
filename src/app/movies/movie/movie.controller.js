(function() {
    'use strict';

    angular
        .module('myTaskDemo')
        .controller('MovieController', MovieController);

    /** @ngInject */
    function MovieController(MoviesService,$state,$stateParams,toastr) {
        var vm = this;


        vm.fnLoadMovie = function(){
            MoviesService.get({id:$stateParams.id},function(res){
                vm.movie = res;
            });
        };


        vm.fnSaveMovie = function(movie) {
            if ($stateParams.id && $stateParams.id !== 'add') {
                vm.movie.$update(function () {
                    toastr.success("Movie updated successfully.");
                    $state.go('main.movies');
                });
            }else{
                vm.movie.$save(function () {
                    toastr.success("Movie created successfully.");
                    $state.go('main.movies');
                });
            }
        };

        vm.fnInitMovie = function() {
            vm.fnLoadMovie();
        };
    }

})();
