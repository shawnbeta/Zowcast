(function() {
    'use strict';

    angular
        .module('app.utility')
        .factory('UtilityService', UtilityService);

    UtilityService.$inject = ['$http', '$location', 'ConfigService'];

    function UtilityService($http, $location, ConfigService){


        var utilityService = {

            getViewportSize: getViewportSize,
            getCurrentPath: getCurrentPath,
            postRequest: postRequest

        };

        return utilityService;

        function getViewportSize(){
                return {
                    w: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
                    h: Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
                };
            }

            function getCurrentPath(){
                return $location.path();
            }

        function postRequest( data, path ){
            return $http({
                method: 'POST',
                url: ConfigService.serverPath + path,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                transformRequest: function(obj) {
                    var str = [];
                    for(var p in obj)
                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                    return str.join("&");
                },
                data: data
            });
        }



        }



})();
