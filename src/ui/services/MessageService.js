(function() {
    'use strict';

    angular
        .module('app.ui')
        .factory('MessageService', MessageService);

    MessageService.$inject = ['$rootScope', '$interval'];

    function MessageService($rootScope, $interval){

        var mTimer;

        return {

            displayMessage: function(text, msgType, _closeMessageTimer){
                $rootScope.message.text = text;
                $rootScope.message.msgType = msgType;
                if(_closeMessageTimer)
                    _closeMessageTimer();
            },

            closeMessageTimer: function(){
                if(angular.isDefined(mTimer)) return;
                mTimer = $interval(function(){
                    $interval.cancel(mTimer);
                    mTimer = undefined;
                    $rootScope.message.text = null;
                }, 4000);

            },

            clearMessage: function(){
                $rootScope.message.text = null;
            }

        }


    }
})();
