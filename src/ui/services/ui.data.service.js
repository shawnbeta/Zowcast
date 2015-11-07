(function() {
    'use strict';

    angular
        .module('app.ui')
        .factory('UIDataService', UIDataService);

    function UIDataService(){

        var uiDataService = {

            message: {},
            overlay: {},
            closeMessage: closeMessage,
            closeOverlay: closeOverlay

        };

        return uiDataService;

        function closeMessage(){
            uiDataService.message.text = null;
        }

        function closeOverlay(){
            uiDataService.overlay.style = null;
        }


    }
})();
