(function() {
    'use strict';

    angular
        .module('app.media')
        .controller('SubscriptionController', SubscriptionController);

    SubscriptionController.$inject = ['$scope', 'SubscriptionService'];

    function SubscriptionController($scope, SubscriptionService){

        $scope.setSubscriptionStyle = function(newStyle){
            $scope.subscriptionStyle = newStyle;
        };

        $scope.add = function(rsEpisodes){
          SubscriptionService.add($scope, rsEpisodes);
        };

    }
    })();
