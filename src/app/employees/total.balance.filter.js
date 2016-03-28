(function() {
    'use strict';

    angular
        .module('myTaskDemo')
        .filter('totalBalanceFilter', totalBalanceFilter);

    /** @ngInject */
    function totalBalanceFilter($log){
        return function (input, property) {
            var i = input instanceof Array ? input.length : 0;
            $log.log("i_length: ",i);
            if (typeof property === 'undefined' || i === 0) {
                $log.log("return_i: ",i);
                return i;
            } else if (isNaN(input[0][property])) {
                throw 'filter total can count only numeric values';
            } else {
                var total = 0;
                while (i--) {
                    total += input[i][property];
                    $log.log("input_i_property: ",property);
                }
                return total;
            }
        };
    }
})();