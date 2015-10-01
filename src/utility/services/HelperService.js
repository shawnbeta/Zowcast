hcUtilities.factory('HelperService', [
    '$http', 'StorageService',
    function($http, $q, StorageService) {

        // Since request will be made from here set the base to prepend to path.
        var base_path = 'api';

        return {
            makeRequest: function(path, rqst){
                return $http.post(base_path + path, rqst)
                    .then(function(rsp){
                        return rsp.data;
                    });
            }
        }



    }]);