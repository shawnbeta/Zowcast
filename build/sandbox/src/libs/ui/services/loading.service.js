(function() {
    'use strict';

    angular
        .module('app.ui')
        .factory('LoadingService', LoadingService);

    LoadingService.$inject = [ 'UIDataService', 'DOMService'];


    function LoadingService( UIDataService, DOMService ){

        var loadingService = {
            displayLoading: displayLoading
        };

        return loadingService;

        function displayLoading(val){
            UIDataService.displayLoading(val);
            DOMService.positionElement('.loading');
        }



    }
})();
