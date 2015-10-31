(function() {
    'use strict';

    angular
        .module('app.media')
        .factory('SubscriptionService', SubscriptionService);

    SubscriptionService.$inject = ['$rootScope', '$http', 'Subscription', 'ConfigService', 'MessageService'];

    function SubscriptionService($rootScope, $http, Subscription, ConfigService, MessageService){
        return {

            subscriptions: [],

            loadSubscriptionsFromLocalStorage: function(){
                return this.subscriptions = localStorage.getItem('subscriptions') ?
                    JSON.parse(localStorage.getItem('subscriptions')) : {};
            },

            sync: function(){
                // Get the users(BROWSERS) current subscriptions from localStorage
                var syncedSubscriptions = localStorage.getItem('syncedSubscriptions') ?
                    localStorage.getItem('syncedSubscriptions') : null;
                return $http({
                    method: 'POST',
                    url: ConfigService.serverPath + 'sync',
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    transformRequest: function(obj) {
                        var str = [];
                        for(var p in obj)
                            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                        return str.join("&");
                    },
                    data: {syncedSubscriptions: syncedSubscriptions}
                });


            },

            setMediaAdditions: function(scope, response){

                $rootScope.subscriptions =  response.data.subscriptions;
                $rootScope.episodes =  response.data.episodes;

                // Subscriptions to local storage overwriting existing values
                localStorage.setItem('subscriptions', JSON.stringify(response.data.subscriptions));

                // Subscriptions to local storage overwriting existing values
                localStorage.setItem('episodes', JSON.stringify(response.data.subscriptions));

            },

            setSyncedSubscriptions: function(){
                var count = $rootScope.subscriptions.length;
                var syncedSubscriptions = [];
                for(var i=0;i<count;i++){
                    syncedSubscriptions.push($rootScope.subscriptions[i]['id'])
                }
                localStorage.setItem('syncedSubscriptions', JSON.stringify(syncedSubscriptions));
            },

            add: function( $scope ){
                $rootScope.loadingObject = true;
                var addRsp = $http({
                    method: 'POST',
                    url: ConfigService.serverPath + 'add',
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    transformRequest: function(obj) {
                        var str = [];
                        for(var p in obj)
                            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                        return str.join("&");
                    },
                    data: {src: $scope.formData.src}
                });

                addRsp.then(function(response){
                    if(response.data.subscription){
                        $rootScope.subscriptions.push(response.data.subscription);
                        Array.prototype.push.apply($rootScope.episodes, response.data.episodes);
                        localStorage.setItem('subscriptions', JSON.stringify($rootScope.subscriptions));
                        localStorage.setItem('episodes', JSON.stringify($rootScope.episodes));
                        $rootScope.loadingObject = false;
                        MessageService.displayMessage(
                            'New Subscription Added.', 'swSuccess', MessageService.closeMessageTimer()
                        );
                    }else{
                        $rootScope.loadingObject = false;
                        MessageService.displayMessage(
                            'Subscription Addition Failed. Please try another URL.', 'swError',
                            MessageService.closeMessageTimer()
                        );
                    }
                },
                    function(){
                        $rootScope.loadingObject = false;
                        MessageService.displayMessage(
                            'Adding the Requested URL resuled in failure', 'swError',
                            MessageService.closeMessageTimer()
                        );
                    }

                );

            }
        };
    }
})();

