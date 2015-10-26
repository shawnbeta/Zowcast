app.media.factory('SubscriptionService', [ '$http', 'Subscription', 'EpisodeService', '$rootScope', 'ConfigService',
    'MessageService',
    function($http, Subscription, EpisodeService, $rootScope, ConfigService, MessageService) {

    return {

        loadSubscriptionsFromLocalStorage: function($rootScope){
            $rootScope.subscriptions = localStorage.getItem('subscriptions') ?
                JSON.parse(localStorage.getItem('subscriptions')) : {};
        },

        sync: function(){
            // Get the users(BROWSERS) current subscriptions from localStorage
            var syncedSubscriptions = localStorage.getItem('syncedSubscriptions') ?
                localStorage.getItem('syncedSubscriptions') : null;
            return syncRsp = $http({
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

        setMediaAdditions: function($rootScope, response){
            $rootScope.subscriptions = response.data.subscriptions;
            // Subscriptions to local storage overwriting existing values
            localStorage.setItem('subscriptions', JSON.stringify($rootScope.subscriptions));
            $rootScope.episodes = response.data.episodes;
            // Subscriptions to local storage overwriting existing values
            localStorage.setItem('episodes', JSON.stringify($rootScope.episodes));
        },

        setSyncedSubscriptions: function(){
            var count = $rootScope.subscriptions.length;
            var syncedSubscriptions = [];
            for($i=0;$i<count;$i++){
                syncedSubscriptions.push($rootScope.subscriptions[$i]['id'])
            }
            localStorage.setItem('syncedSubscriptions', JSON.stringify(syncedSubscriptions));
        },

        add: function($scope){
            $rootScope.loading = true;
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
                    $rootScope.loading = false;
                    MessageService.displayMessage(
                        'New Subscription Added.', 'swSuccess', MessageService.closeMessageTimer());
                    $rootScope.message.success = 'New Subscription Added';
                }else{
                    $rootScope.loading = false;
                    MessageService.displayMessage(
                        'New Subscription Added.', 'swSuccess', MessageService.closeMessageTimer());
                    $rootScope.message.success = 'Something went wrong';
                }
            });

        }
    };
}]);

