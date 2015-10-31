(function() {
    'use strict';

    angular
        .module('app.ui')
        .factory('LoadingService', LoadingService);

    function LoadingService(){

        return {

            loadingObject: false,

            displayLoading: function( ){
                 this.loadingObject = true;
            },

            hideLoading: function(  ){
                this.loadingObject = false;
            }

        }


    }
})();
