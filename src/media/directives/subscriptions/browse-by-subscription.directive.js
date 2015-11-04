(function() {
    'use strict';

    angular
        .module('app.media')
        .directive('subscriptionNavigation', subscriptionNavigation);

    function subscriptionNavigation(){

        return {
            restrict : 'E',
            scope: '=',

            link: function(scope){
                scope.episodesBySubscription = function(subscription){
                    scope.activeSubscription = subscription.id;
                    scope.subscriptionFilterStatus = true;
                };
                scope.listAllEpisodes = function(){
                    scope.activeSubscription = 0;
                    scope.subscriptionFilterStatus = false;
                };
            },

            templateUrl: 'src/libs/media/templates/subscriptions/navigation.html'
        };
    }
})();

