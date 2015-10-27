(function() {
    'use strict';

    angular
        .module('app.media')
        .controller('SubscriptionController', SubscriptionController);

    SubscriptionController.$inject = ['$scope', '$rootScope', 'SubscriptionService', 'UtilityService'];

    function SubscriptionController($scope, $rootScope, SubscriptionService, UtilityService){

        $scope.setSubscriptionStyle = function(newStyle){
            $scope.subscriptionStyle = newStyle;
        };

        $scope.add = function(){
          SubscriptionService.add($rootScope, $scope);
        };

        $rootScope.currentPath = UtilityService.getCurrentPath();


    }
    })();
