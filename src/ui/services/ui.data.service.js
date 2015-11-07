(function() {
    'use strict';

    angular
        .module('app.ui')
        .factory('UIDataService', UIDataService);

    function UIDataService(){

        var uiDataService = {

            message: {},
            overlay: {},
            closeMessage: closeMessage

        };

        return uiDataService;

        function closeMessage(){
            uiDataService.message.text = null;
        }



    }
})();
