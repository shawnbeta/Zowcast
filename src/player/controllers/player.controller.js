(function() {
    'use strict';

    angular
        .module('app.media')
        .controller('PlayerController', PlayerController);

    PlayerController.$inject = [ 'MediaService' ];

    function PlayerController( MediaService  ){

        var vm = this;

        vm.mediaPlayer = MediaService.mediaPlayer;


    }
})();
