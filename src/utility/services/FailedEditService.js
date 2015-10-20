(function() {
    'use strict';
    angular.module('app.utilities')
        .factory('FailedEditService', FailedEditService);

    function FailedEditService(StorageService, _) {


        var storageService = new StorageService();

        var failuresExist = false;

        return {

            persistToCollection: function (collection, obj) {
                storageService.persistToCollection(collection, obj, 'FailedEditCollection');
            },

            // This should only be run after verifying that the Server is available.
            pushRemote: function (collection) {
                var safeValue = encodeURIComponent(collection);
                return $http.post('#', safeValue);
            },

            purgeObjArray: function (collection, id) {
                // Erase from localStorage
                _.each(collection, function (element, iteration) {
                    localStorage.removeItem(element);
                });
                // Remove the Departure Collection
                localStorage.removeItem(id);
            },

            checkForFailures: function () {
                if (storageService.isItemInStorage('FailedEditCollection')) {

                }
            }

        }
    }
})();

