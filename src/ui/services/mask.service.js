(function() {
    'use strict';

    angular
        .module('app.ui')
        .factory('MaskService', MaskService);

    MaskService.$inject = [ 'UIDataService'  ];


    function MaskService( UIDataService ){

        var maskService = {
            displayMask: displayMask
        };

        return maskService;

        function displayMask(val){
            UIDataService.displayMask(val);
        }



    }
})();
