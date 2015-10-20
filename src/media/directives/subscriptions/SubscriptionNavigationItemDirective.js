app.media.directive('subscriptionNavigationItem', function($rootScope, $filter) {

      return {
        restrict : 'E',
          scope: '=',

        link: function(scope){
            scope.episodesBySubscription = function(subscription){
                scope.activeSubscription = subscription.id;
                // Make a copy of the original
                if(!$rootScope.episodeClone)
                    $rootScope.episodeClone = $rootScope.episodes;
                var episodeClones = angular.copy($rootScope.episodeClone);
                $rootScope.episodes =
                    $filter('filterBySubscription')(episodeClones, subscription.id);
            };
            scope.listAllEpisodes = function(){
                scope.activeSubscription = 0;
                $rootScope.episodes =  $rootScope.episodeClone;
            };

        },

          templateUrl: 'src/libs/media/templates/subscriptions/navigation.html'
      };
});

