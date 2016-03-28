(function() {
    'use strict';

    angular
        .module('myTaskDemo')
        .factory('MoviesService', MoviesService);

    /** @ngInject */
    function MoviesService($resource) {
        return $resource('http://movieapp-sitepointdemos.rhcloud.com/api/movies/:id', { id: '@_id' }, {
            update: {
                method: 'PUT'
            }
        });
    }

})();
