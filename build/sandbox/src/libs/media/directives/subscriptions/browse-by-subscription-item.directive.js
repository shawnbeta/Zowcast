(function() {
    'use strict';

    angular
        .module('app.media')
        .directive('subscriptionNavigationItem', subscriptionNavigationItem);

    subscriptionNavigationItem.$inject = ['$rootScope'];


    function subscriptionNavigationItem($rootScope){

        return {
            restrict : 'E',
            scope: true,

            link: function( scope ){
                scope.episodesBySubscription = function(subscription){
                    $rootScope.activeSubscription = subscription.id;
                    $rootScope.subscriptionFilterStatus = true;
                };
                scope.listAllEpisodes = function(){
                    scope.activeSubscription = 0;
                    scope.subscriptionFilterStatus = false;
                };
            },

            templateUrl: 'src/libs/media/templates/subscriptions/navigation-item.html'
        };

    }
})();
