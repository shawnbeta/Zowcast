(function() {
    'use strict';

    angular
        .module('app.ui')
        .factory('MessageService', MessageService);

    MessageService.$inject = [ '$interval' ];

    function MessageService($interval){

        var mTimer;

        return {

            displayMessage: function( messageObject, text, msgType, _closeMessageTimer ){
                messageObject.text = text;
                messageObject.style = msgType;
                if(_closeMessageTimer)
                    _closeMessageTimer( );
            },

            closeMessageTimer: function(  ){
                if(angular.isDefined(mTimer)) return;
                mTimer = $interval(function(){
                    $interval.cancel(mTimer);
                    mTimer = undefined;
                }, 4000);

            },

            closeMessage: function( ){
                return { text: null };
            }

        }


    }
})();
