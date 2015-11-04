(function() {
    'use strict';

    angular
        .module('app.vendors')
        .factory('exception', exception);

    /* @ngInject */
    function exception(logger) {
        return {
            catcher: catcher
        };

        function catcher(message) {
            return function(reason) {
                logger.error(message, reason);
            };
        }
    }
})();