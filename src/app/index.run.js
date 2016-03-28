(function() {
  'use strict';

  angular
    .module('myTaskDemo')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {
    $log.debug('runBlock end');
  }

})();
