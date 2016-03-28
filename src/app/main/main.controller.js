(function() {
  'use strict';

  angular
    .module('myTaskDemo')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($cookies,$state,$location) {
      var vm = this;

      vm.fnLogout = function(){
          $cookies.remove("auth_token");
          $state.go("login");
      };

      vm.fnIsActive = function(url){
          return $location.path() == url ? 'active a' : '';
      };
//      // keep stay the highlighted sidebar menu
//      $(document).ready(function(){
//          $(".side-nav li a").click(function() {
//              console.log("In click event");
//              $(".side-nav li ").removeClass("active");
//              $(this).closest("li").addClass("active");
//          });
//
//          $('[data-toggle="tooltip"]').tooltip();
//      });

  }

})();
