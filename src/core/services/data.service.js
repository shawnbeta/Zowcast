(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('DataService', DataService);

    /* @ngInject */
    function DataService($http, $location, $q, exception, logger) {

        var service = {
            sync: sync,
            nav: getNavigation
        };

        return service;

        function sync() {
            // Get the users(BROWSERS) current subscriptions from localStorage
            var syncedSubscriptions = localStorage.getItem('syncedSubscriptions') ?
                localStorage.getItem('syncedSubscriptions') : null;
            return $http({
                method: 'POST',
                url: ConfigService.serverPath + 'sync',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                transformRequest: function(obj) {
                    var str = [];
                    for(var p in obj)
                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                    return str.join("&");
                },
                data: {syncedSubscriptions: syncedSubscriptions}
            });
        }


        function getNavigation(){
            return [
                {
                    "href": "episodes",
                    "target": false,
                    "title": "episodes",
                    "text": "episodes"
                },
                {
                    "href": "subscriptions",
                    "target": false,
                    "title": "subscriptions",
                    "text": "subscriptions"
                },
                {
                    "href": "add",
                    "target": false,
                    "title": "add",
                    "icon": "plus"
                },
                {
                    "href": "settings",
                    "target": false,
                    "title": "settings",
                    "icon": "cog"
                }
            ];
        }




    }
})();