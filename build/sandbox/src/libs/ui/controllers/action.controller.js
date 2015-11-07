(function() {
    'use strict';

    angular
        .module('app.ui')
        .controller('ActionController', ActionController);

    ActionController.$inject = [  '$scope', '$location', 'MediaService', 'EpisodeService', 'SubscriptionService',
     'DataService', 'UtilityService', 'UIService'];

    function ActionController(  $scope, $location, MediaService, EpisodeService, SubscriptionService, DataService,
                                UtilityService, UIService ){

        var vm = this;
        vm.navigation = DataService.nav();
        vm.currentPath = UtilityService.getCurrentPath();

        $scope.go = go;
        $scope.sync = sync;
        $scope.loadSamples = loadSamples;
        $scope.clearLocalStorage = clearLocalStorage;
        $scope.$on('$routeChangeSuccess', function(){
            vm.currentPath = UtilityService.getCurrentPath();
        });

        /////////////

        function go(path){
            $location.path(path);
            UIService.scrollToTop();
        }



        function clearLocalStorage(){
            localStorage.removeItem('subscriptions');
            localStorage.removeItem('episodes');
            MediaService.purgeAll();
        }

        function loadSamples(){
            //clearLocalStorage();
            EpisodeService.loadSampleEpisodes();
            SubscriptionService.loadSampleSubscriptions();
        }

        function sync(){
            vm.loadingObject = true;
            var rsp = SubscriptionService.sync();
        }

    }
})();
