app.media.directive('subscriptionNavigation', ['$rootScope',
    function($rootScope) {

      return {
        restrict : 'E',
          scope: '=',

        link: function(scope){
            scope.episodesBySubscription = function(subscription){
                $rootScope.activeSubscription = subscription.id;
                $rootScope.subscriptionFilterStatus = true;
            };
            scope.listAllEpisodes = function(){
                $rootScope.activeSubscription = 0;
                $rootScope.subscriptionFilterStatus = false;
            };

        },

          templateUrl: 'src/libs/media/templates/subscriptions/navigation.html'
      };
}]);

