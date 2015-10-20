(function() {
    'use strict';
            angular.module('app.utilities')
                .factory('HelperService', HelperService);


            function HelperService($http) {

        // Since request will be made from here set the base to prepend to path.
        var base_path = 'api';

        return {
            makeRequest: function(path, rqst){
                return $http.post(base_path + path, rqst)
                    .then(function(rsp){
                        return rsp.data;
                    });
            },

            addToCollection: function(collection, newItems){
                _.each(newItems, function(e,i){
                    collection[i] =  e;
                });
                return collection;
            }

        }



            };
})();