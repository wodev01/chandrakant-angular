/* global malarkey:false, localStorage:false, moment:false */
(function() {
  'use strict';

  angular
    .module('myTaskDemo')
    .constant('malarkey', malarkey)
    .constant('localStorage', localStorage)
    .constant('moment', moment);
})();
