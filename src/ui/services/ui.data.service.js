(function() {
    'use strict';

    angular
        .module('app.ui')
        .factory('UIDataService', UIDataService);

    function UIDataService(){

        var uiDataService = {

            message: {},
            overlay: {},
            loading: {},
            mask: {},
            closeMessage: closeMessage,
            closeOverlay: closeOverlay,
            displayLoading: displayLoading,
            displayMask: displayMask
        };

        return uiDataService;

        function closeMessage(){
            uiDataService.message.text = null;
        }

        function closeOverlay(){
            uiDataService.overlay.style = null;
            uiDataService.mask.visible  = false;
        }

        function displayLoading(val){
            uiDataService.loading.visible = val;
            uiDataService.mask.visible = val;
        }

        function displayMask(val){
            uiDataService.mask.visible  = val;
        }


    }
})();
