app.media.directive('subscriptionNavigation', ['$rootScope', function($rootScope) {

      return {
        restrict : 'E',
          scope: '=',

        link: function(scope){
            scope.episodesBySubscription = function(subscription){
                $rootScope.activeSubscription = subscription.id;
                $rootScope.subscriptionFilterStatus = true;
                //// Make a copy of the original
                //if(!$rootScope.episodeClone)
                //    $rootScope.episodeClone = $rootScope.episodes;
                //var episodeClones = angular.copy($rootScope.episodeClone);
                //$rootScope.episodes =
                //    $filter('filterBySubscription')(episodeClones, subscription.id);
            };
            scope.listAllEpisodes = function(){
                $rootScope.activeSubscription = 0;
                $rootScope.subscriptionFilterStatus = false;
                //$rootScope.episodes =  $rootScope.episodeClone;
            };

        },

          templateUrl: 'src/libs/media/templates/subscriptions/navigation.html'
      };
}]);

