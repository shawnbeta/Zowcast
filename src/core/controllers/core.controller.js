(function() {
    'use strict';

    angular
        .module('app.core')
        .controller('CoreController', CoreController);

    CoreController.$inject = ['UIDataService'];


    function CoreController( UIDataService ){
        var vm = this;
        vm.loading = UIDataService.loading;
    }
})();