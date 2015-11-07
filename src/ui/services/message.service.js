(function() {
    'use strict';

    angular
        .module('app.ui')
        .factory('MessageService', MessageService);

    MessageService.$inject = [ '$interval', 'UIDataService' ];

    function MessageService( $interval, UIDataService ){

        var mTimer;

        var messageService = {
            displayMessage: displayMessage,
            closeMessageTimer: closeMessageTimer,
            closeMessage: closeMessage
        };

        return messageService;

            function displayMessage( text, msgType, _closeMessageTimer ){
                UIDataService.message.text = text;
                UIDataService.message.style = msgType;
                if(_closeMessageTimer)
                    _closeMessageTimer( );
            }

            function closeMessageTimer(  ){
                if(angular.isDefined(mTimer)) return;
                mTimer = $interval(function(){
                    messageService.closeMessage();
                    $interval.cancel(mTimer);
                    mTimer = undefined;
                }, 4000);

            }

            function closeMessage( ){
                UIDataService.closeMessage();
            }




    }
})();
