app.media.directive('subscriptionItem',['$rootScope', function($rootScope) {

    return  {

        restrict: 'E',

        scope: '=',

        link: function(scope){
            scope.setAutoDownload = function(model){
                model.auto_download = model.auto_download !=1 ? 1  : 0;
                model.updateAutoDownload(model);
            };

            scope.downloadToggle = function(model){
                return model.auto_download !=1 ? 'AutoDownload'  : 'Stop AutoDownload';
            };

            scope.doRemove = function(model){
                var rsp = model.remove(model, $rootScope.subscriptions, $rootScope.episodes);
                $rootScope.episodes = rsp.episodes;
                $rootScope.subscriptions = rsp.subscriptions;
            };


        },

        templateUrl: 'src/libs/media/templates/subscriptions/item.html'
    }

}]);