(function() {
    'use strict';

    angular
        .module('app.ui')
        .factory('LoadingService', LoadingService);

    LoadingService.$inject = [ 'UIDataService'  ];


    function LoadingService( UIDataService ){

        var loadingService = {
            displayLoading: displayLoading
        };

        return loadingService;

        function displayLoading(val){
            UIDataService.displayLoading(val);
        }



    }
})();
