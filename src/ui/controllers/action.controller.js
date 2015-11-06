(function() {
    'use strict';

    angular
        .module('app.ui')
        .controller('ActionController', ActionController);

    ActionController.$inject = [ '$rootScope', '$scope', '$location', 'EpisodeService', 'SubscriptionService',
     'DataService'];

    function ActionController( $rootScope, $scope, $location, EpisodeService, SubscriptionService, DataService ){

        var vm = this;
        vm.navigation = DataService.nav();

        $scope.go = go;

        $scope.sync = sync;

        $scope.loadSampleEpisodes = function(){
            $rootScope.episodes = EpisodeService.loadSampleEpisodes();
            $rootScope.sbuscriptions = SubscriptionService.loadSampleEpisodes();
        };

        $scope.clearLocalStorage = clearLocalStorage;


        function go(path){
            $location.path(path);
        }

        function clearLocalStorage(){
            localStorage.removeItem('subscriptions');
            localStorage.removeItem('episodes');
        }

        //function loadSampleEpisodes(EpisodeService){
        //    console.log('working');
        //    EpisodeService.loadSampleEpisodes(EpisodeService);
        //}

        function sync(){
            vm.loadingObject = true;
            var rsp = SubscriptionService.sync();
        }

    }
})();
