(function() {
  'use strict';

  angular
    .module('myTaskDemo')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('login',{
            url : '/login',
            templateUrl: 'app/login/login.html',
            controller : 'LoginController',
            controllerAs :  'login'
        }).state('main', {
            url: '/',
            abstract: true,
            templateUrl: 'app/main/main.html',
            controller: 'MainController',
            controllerAs: 'main'
        })
        .state('main.dashboard', {
            url: 'dashboard',
            templateUrl: 'app/dashboard/dashboard.html',
            controller: 'DashboardController',
            controllerAs: 'dashboard'
        })
        .state('main.employees', {
          url: 'employees',
          templateUrl: 'app/employees/employees.html',
          controller: 'EmployeesController',
          controllerAs: 'employees'
        })
        .state('main.employee', {
            url: 'employee/:id',
            templateUrl: 'app/employees/employee/employee.html',
            controller: 'EmployeeController',
            controllerAs: 'employee'
        })
        .state('main.movies', {
            url: 'movies',
            templateUrl: 'app/movies/movies.html',
            controller: 'MoviesController',
            controllerAs: 'movies'
        })
        .state('main.movie', {
            url: 'movie/:id',
            templateUrl: 'app/movies/movie/movie.html',
            controller: 'MovieController',
            controllerAs: 'movie'
        })
        .state('main.aboutus', {
            url: 'aboutus',
            templateUrl: 'app/aboutu/aboutus.html',
            controller: 'AboutUsController',
            controllerAs: 'about'
        })
        .state('404',{
            url : '404',
            templateUrl: 'app/errorpage/404.html',
            controller : 'PageNotFoundController',
            controllerAs : '404'
        });

        $urlRouterProvider.otherwise('login');


    }



})();
