(function() {
    'use strict';

    angular
        .module('app.ui')
        .factory('UIDataService', UIDataService);

    function UIDataService(){

        var uiDataService = {

            message: {},
            overlay: {},
            loading: false,
            mask: false,
            closeMessage: closeMessage,
            closeOverlay: closeOverlay,
            toggleLoading: toggleLoading,
            toggleMask: toggleMask

        };

        return uiDataService;

        function closeMessage(){
            uiDataService.message.text = null;
        }

        function closeOverlay(){
            uiDataService.overlay.style = null;
            uiDataService.mask = false;
        }

        function toggleLoading(val){
            uiDataService.loading = val;
            uiDataService.mask = val;
        }

        function toggleMask(val){
            uiDataService.mask = val;
        }


    }
})();
