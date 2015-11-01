(function() {
    'use strict';

    angular
        .module('app.media')
        .directive('subscriptionItem', subscriptionItem);

    subscriptionItem.$inject = ['MessageService', 'OverlayService'];

    function subscriptionItem(MessageService, OverlayService){

        return  {

            restrict: 'E',

            scope: '=',

            link: function(scope){

                scope.autoDownloadSubscription = function(){
                    MessageService.displayMessage(
                        'The auto download feature has been disabled for this demo.',
                        'swSuccess fixed', MessageService.closeMessageTimer()
                    );
                };

                scope.showSubscriptionDetails = function(subscription){
                    OverlayService.setOverlay( scope.overlayObject, subscription );
                };

                scope.removeSubscription = function(){
                    MessageService.displayMessage(
                        'The delete subscription feature has been disabled for this demo.',
                        'swSuccess fixed', MessageService.closeMessageTimer()
                    );
                };

            },

            templateUrl: 'src/libs/media/templates/subscriptions/item.html'
        };


    }
})();
