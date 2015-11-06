(function() {
    'use strict';

    angular
        .module('app.core')
        .controller('CoreController', CoreController);

    CoreController.$inject = [ '$scope', 'MediaService', 'UtilityService' ];

    /* @ngInject */
    function CoreController( $scope, MediaService, UtilityService){

        /* jshint validthis: true */
        var vm = this;

        initialize();

        function initialize(){

            vm.loadingObject = true;


            // Initialize Player to prevent errors.
            vm.mediaPlayer = MediaService.mediaPlayer;

            $scope.$on('$routeChangeSuccess', function(){
                $scope.currentPath = UtilityService.getCurrentPath();
            });

        }




    }
})();