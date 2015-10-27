(function() {
    'use strict';

    angular
        .module('app.media')
        .factory('SubscriptionService', SubscriptionService);

    SubscriptionService.$inject = ['$http', 'Subscription', 'ConfigService', 'MessageService'];

    function SubscriptionService($http, Subscription, ConfigService, MessageService){
        return {

            loadSubscriptionsFromLocalStorage: function(rs){
                rs.subscriptions = localStorage.getItem('subscriptions') ?
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

            setMediaAdditions: function(rs, response){
                rs.subscriptions = response.data.subscriptions;
                // Subscriptions to local storage overwriting existing values
                localStorage.setItem('subscriptions', JSON.stringify(rs.subscriptions));
                rs.episodes = response.data.episodes;
                // Subscriptions to local storage overwriting existing values
                localStorage.setItem('episodes', JSON.stringify(rs.episodes));
            },

            setSyncedSubscriptions: function(rs){
                var count = rs.subscriptions.length;
                var syncedSubscriptions = [];
                for(var i=0;i<count;i++){
                    syncedSubscriptions.push(rs.subscriptions[i]['id'])
                }
                localStorage.setItem('syncedSubscriptions', JSON.stringify(syncedSubscriptions));
            },

            add: function(rs, $scope){
                rs.loading = true;
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
                        rs.subscriptions.push(response.data.subscription);
                        Array.prototype.push.apply(rs.episodes, response.data.episodes);
                        localStorage.setItem('subscriptions', JSON.stringify(rs.subscriptions));
                        localStorage.setItem('episodes', JSON.stringify(rs.episodes));
                        rs.loading = false;
                        MessageService.displayMessage(
                            'New Subscription Added.', 'swSuccess', MessageService.closeMessageTimer());
                        rs.message.success = 'New Subscription Added';
                    }else{
                        rs.loading = false;
                        MessageService.displayMessage(
                            'New Subscription Added.', 'swSuccess', MessageService.closeMessageTimer());
                        rs.message.success = 'Something went wrong';
                    }
                });

            }
        };
    }
})();

