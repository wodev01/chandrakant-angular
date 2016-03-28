(function() {
  'use strict';

  angular
    .module('myTaskDemo', ['ngAnimate', 'ngCookies', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.router', 'toastr','ui.bootstrap'])
      .filter('TotalBalanceFilter', function () {
          return function (input, property) {
              var i = input instanceof Array ? input.length : 0;
              if (typeof property === 'undefined' || i === 0) {
                  return i;
              } else if (isNaN(input[0][property])) {
                  throw 'filter total can count only numeric values';
              } else {
                  var total = 0;
                  while (i--)
                      total += input[i][property];
                  return total;
              }
          };
      })
  ;
})();
