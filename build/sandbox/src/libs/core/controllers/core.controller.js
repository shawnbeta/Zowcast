(function() {
    'use strict';

    angular
        .module('app.core')
        .controller('CoreController', CoreController);

    /* @ngInject */
    function CoreController( UIDataService ){
        var vm = this;
        vm.loading = UIDataService.loading;
    }
})();