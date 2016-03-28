(function() {
    'use strict';

    angular
        .module('myTaskDemo')
        .controller('MoviesController', MoviesController);

    /** @ngInject */
    function MoviesController(MoviesService,modalService) {
        var vm = this;

        vm.fnListMovies = function(){
            vm.movies = MoviesService.query();
        };

        vm.fnInitMovies = function(){
            vm.fnListMovies();
        };

        vm.fnDeleteMovie = function(movie){

            var movieName = movie.title;
            var modalOptions = {
                closeButtonText: 'Cancel',
                actionButtonText: 'Delete Movie',
                headerText: 'Delete ' + movieName + '?',
                bodyText: 'Are you sure you want to delete this movie?'
            };


            modalService.showModal({}, modalOptions).then(function () {
                movie.$delete(function(){
                    vm.fnListMovies();
                });
            });

        }
    }

})();
