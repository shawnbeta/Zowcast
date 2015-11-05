(function() {
    'use strict';

    angular
        .module('app.ui')
        .directive('swNavigation', swNavigation);

    function swNavigation(){

       return  {
            restrict : 'E',
            templateUrl: 'src/libs/ui/templates/navigation.tpl.html',
            controller: 'ActionController',
            controllerAs: 'vm',
            bindToController: true
        };
    }
})();
