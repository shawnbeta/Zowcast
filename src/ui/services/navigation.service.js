(function() {
    'use strict';

    angular
        .module('app.ui')
        .factory('NavigationService', NavigationService);

    function NavigationService() {

        return {
            getNavigation: getNavigation
        };

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