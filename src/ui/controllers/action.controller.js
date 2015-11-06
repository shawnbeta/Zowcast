(function() {
    'use strict';

    angular
        .module('app.ui')
        .controller('ActionController', ActionController);

    ActionController.$inject = [  '$scope', '$location', 'MediaService', 'EpisodeService', 'SubscriptionService',
     'DataService'];

    function ActionController(  $scope, $location, MediaService, EpisodeService, SubscriptionService, DataService ){

        var vm = this;
        vm.navigation = DataService.nav();

        $scope.go = go;

        $scope.sync = sync;

        $scope.loadSampleEpisodes = function(){
            EpisodeService.loadSampleEpisodes();
            SubscriptionService.loadSampleSubscriptions();
        };

        $scope.clearLocalStorage = clearLocalStorage;


        function go(path){
            $location.path(path);
        }

        function clearLocalStorage(){
            localStorage.removeItem('subscriptions');
            localStorage.removeItem('episodes');
            MediaService.purgeAll();
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
