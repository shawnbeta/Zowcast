(function() {
    'use strict';

    angular
        .module('app.media')
        .directive('ebsItem', ebsItem);

    //ebsItem.$inject = ['$rootScope'];


    function ebsItem(){

        return {
            restrict : 'E',
            //controller: 'EpisodeController',
            //controllerAs: 'vm',
            //bindToController: true,

            //scope: true,
            //
            //link: function( scope ){
            //    scope.episodesBySubscription = function(subscription){
            //        $rootScope.activeSubscription = subscription.id;
            //        $rootScope.subscriptionFilterStatus = true;
            //    };
            //    scope.listAllEpisodes = function(){
            //        scope.activeSubscription = 0;
            //        scope.subscriptionFilterStatus = false;
            //    };
            //},

            templateUrl: 'src/libs/media/templates/subscriptions/ebs-item.html'
        };

    }
})();
