(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('ConfigService', ConfigService);

    function ConfigService(){
        return {
            serverPath: 'rest/web/app_dev.php/'
        };
    }
})();