(function() {
    'use strict';

    angular
        .module('app.ui')
        .factory('MessageService', MessageService);

    MessageService.$inject = [ '$rootScope', '$interval' ];

    function MessageService( $rootScope, $interval ){

        var mTimer;

        return {

            displayMessage: function( text, msgType, _closeMessageTimer ){
                $rootScope.messageObject.text = text;
                $rootScope.messageObject.style = msgType;
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

        };


    }
})();
