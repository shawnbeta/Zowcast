(function() {
    'use strict';

    angular
        .module('app.ui')
        .factory('LoadingService', LoadingService);

    LoadingService.$inject = [ 'UIDataService'  ];


    function LoadingService( UIDataService ){

        var loadingService = {
            toggleLoading: toggleLoading
        };

        return loadingService;

        function toggleLoading(val){
            UIDataService.toggleLoading(val);
        }



    }
})();
