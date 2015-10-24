app.media.factory('SubscriptionService', [ '$http', 'Subscription', 'EpisodeService', '$rootScope', 'ConfigService', 'UtilityService',
    function($http, Subscription, EpisodeService, $rootScope, ConfigService, UtilityService) {

    return {


        loadSubscriptionsFromLocalStorage: function($rootScope){
            $rootScope.subscriptions = localStorage.getItem('subscriptions') ?
                JSON.parse(localStorage.getItem('subscriptions')) : {};
        },

        sync: function(){
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
            console.log(response);
            $rootScope.subscriptions = response.data.subscriptions;
            // Subscriptions to local storage overwriting existing values
            localStorage.setItem('subscriptions', JSON.stringify($rootScope.subscriptions));
            $rootScope.episodes = response.data.episodes;
            // Subscriptions to local storage overwriting existing values
            localStorage.setItem('episodes', JSON.stringify($rootScope.episodes));
        },

        setSyncedSubscriptions: function(){
            var count = $rootScope.subscriptions.length;
            console.log('subscripiton length');
            console.log(count);
            console.log('subscriptions');
            console.log($rootScope.subscriptions);
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
                $rootScope.loading = false;
                if(response.data.subscription){
                    console.log('response.data.subscription')
                    console.log(response.data.subscription)
                    console.log('$rootScope.subscriptions')
                    console.log($rootScope.subscriptions)
                    console.log('response.data.episodes')
                    console.log(response.data.episodes)
                    console.log('$rootScope.episodes')
                    console.log($rootScope.episodes)
                    $rootScope.subscriptions.push(response.data.subscription);
                    Array.prototype.push.apply($rootScope.episodes, response.data.episodes);
                    localStorage.setItem('subscriptions', JSON.stringify($rootScope.subscriptions));
                    localStorage.setItem('episodes', JSON.stringify($rootScope.episodes));
                    $rootScope.message.success = 'New Subscription Added';
                }else{
                    $rootScope.message.error = 'Something went wrong';
                }
            });

        },



        //initializeManager: function(setSubscriptionManager, subscriptions){
        //    var submgr = this.SubscriptionManager();
        //    submgr.subscriptions = subscriptions;
        //    setSubscriptionManager(submgr);
        //},
        //
        //SubscriptionManager: function(){
        //  return {
        //      subscriptions: [],
        //      addView: 0
        //  }
        //
        //},






        
        // Test running
        // 
        // @params: String src: url or youtube channel ID,
        //          String subscriptionType: audio or video
        // @return: Promise of JSON Data from server. 
        //add : function(src, subscriptionType) {
        //    var url = 'api/index.php?entity=subscription&action=add&src=' + src + '&subscriptionType=' + subscriptionType;
        //    return $http.get(url).then(function(rsp){
        //        return rsp.data;
        //    });
        //},
        
        // This updates all the models and collections
        // in the app with the new data.
        // TESTING
        // @params: Array rsSubscripitons collection of subscription object models,
        //          Array rsEpisodes: collection of episode object models.
        //          Array data: collection of subscription and episode
        //          json formatted object typically from server response.
        // @return: Array rsp: contains two arrays episode object models and 
        //          subscription object models.
        insertNewMedia : function(rsSubscriptions, rsEpisodes, data) {
            var rsp = [];
            var subscriptionCollection = 
                PersistenceService.loadData('SubscriptionCollection') || [];
            var subscription = this.makeSubscription(data.subscription);
            
            subscriptionCollection.push(subscription.id);
            PersistenceService.save('SubscriptionCollection', subscriptionCollection);
            PersistenceService.save('s' + subscription.id, subscription);
            
            // Now add to memory
            rsSubscriptions[subscription.id] = subscription;
            // Episodes
            // Make the model object
            var episodes = EpisodeService.assembleBulkModels(data.episodes, rsSubscriptions);
            // Save each episode in localStorage
            var rsp = EpisodeService.persistBulkModels(episodes);
            
            var epdc = PersistenceService.loadData('EPISODE_PUB_DATE_COLLECTION');
                        
            var updatedEpdc = EpisodeService.addToEPDC(epdc, rsp.epdc);
            
            // Persist the updated epdc to localStorage
            PersistenceService.save('EPISODE_PUB_DATE_COLLECTION', updatedEpdc);
            
            // Save the subscription episode collection in localStorage
            EpisodeService.persistSEC(rsp.sec, subscription, subscription.id);
            // Add to memory
            rsp['episodes'] = EpisodeService.addToMemory(rsEpisodes, episodes);
            rsp['subscriptions'] = rsSubscriptions;
            // Wrap things up by saving the episodeCollection
            EpisodeService.persistBulkCollection(rsp['episodes']);
            return rsp;
        },

        // Test running
        // Loads subscriptions from localStorage
        // @params: Array subscriptionCollection: collection of all subscription ids.
        // @return: Array subscription: collection of subscription object models.
        load : function(subscriptionCollection) {
            var subscriptions = {};
            var self = this;
            // Iterate over the collection object
            _.each(subscriptionCollection, function(element) {
                var model = PersistenceService.loadData('s' + element);
                model = self.makeSubscription(model);
                subscriptions[element] = model;
            });
            return subscriptions;
        },

        // Test running
        // Create a fresh model object.
        // @param: JSON Object: a single json object
        // @return: Subscription Model Object
        makeSubscription : function(subscription) {
            subscription = Subscription.buildSubscription(subscription);
            var self = this;
            subscription.updateAutoDownload = function(model) {
                self.updateLocal(model);
                self.updateDownloadRemote(model);
            };
            subscription.remove = function(model, rsSubscriptions, rsEpisodes) {
                return self.removeSubscription(model, rsSubscriptions, rsEpisodes);
            };
            return subscription;
        },

        // Test running
        // Create a fresh model object.
        // @params: Array subscriptions: a collection of json objects
        // @return: Array subscriptionObjCollection: a collection 
        //          of Subscription object models
        executeBulkRetrieval : function(subscriptions) {
            // Build the models
            var subscriptionObjCollection = this.assembleBulkModels(subscriptions);
            // Save each of the new models
            this.persistBulkModels(subscriptionObjCollection);
            // Save the subscription collection
            this.persistCollection(subscriptionObjCollection);
            // Send back the subscriptions
            return subscriptionObjCollection;
        },

        // Test running
        // Create subscription object model for each of the items
        // in the collection.
        // @params: Collection of JSON objects
        // @return: Array rsp: A collection of subscription model objects.
        assembleBulkModels : function(subscriptionCollection) {
            var rsp = {};
            var self = this;
            _.each(subscriptionCollection, function(subscription) {
                var subscription = self.makeSubscription(subscription);
                rsp[subscription.id] = subscription;
            });
            return rsp;
        },

        // A chain of commands to remove the subscription
        // from memory, localStorage and remote.
        // Testing
        // @params: Subscription model object,
        //          Array rsSubscriptions: all current subscription object models,
        //          Array rsEpisodes: all current episode object models.
        removeSubscription : function(subscription, rsSubscriptions, rsEpisodes) {
            var rsp = [];
            var subscriptions = this.removeFromMemory(subscription, rsSubscriptions);
            // Persist the updated collection to localStorage
            this.persistCollection(subscriptions);
            // Remove the model form localStorage
            localStorage.removeItem('s' + subscription.id);
            // Remove related episodes
            //sec = this.removeSubscriptionEpisodes(subscription, rsEpisodes);
            sec = PersistenceService.loadData('sec' + subscription.id);
            EpisodeService.removeFromLocalStorage(sec);
            episodes = EpisodeService.removeFromMemory(rsEpisodes, sec);
            // Remove the subscription episode collection from localStorage
            localStorage.removeItem('sec' + subscription.id);
            // Save the new episode collection
            EpisodeService.persistBulkCollection(episodes);
            // Remove episodes from Episode Date Collection
            var epdc = PersistenceService.loadData('EPISODE_PUB_DATE_COLLECTION');
            var revisedCollection = EpisodeService.removeFromEPDC(epdc, sec);
            PersistenceService.save('EPISODE_PUB_DATE_COLLECTION', revisedCollection);
            rsp['episodes'] = episodes;
            rsp['subscriptions'] = subscriptions;
            return rsp;
        },

        // Remove the subscription object from rootScope
        // TESTING
        // @params: Subscription subscription object model, 
        //          Array rsSubscriptions: current subscriptions.
        removeFromMemory : function(subscription, rsSubscriptions) {
            return _.omit(rsSubscriptions, subscription.id);
        },

        // Send a request to remove the subscription from remote storage
        // TESTING
        // @params: Subscription subscription object model.
        // @return: Promise indicating success or failure.
        removeRemote : function(subscription) {
            var url = 'api/index.php?entity=subscription&action=delete&id=' + subscription.id;
            return $http.get(url).then(function(rsp){
                return rsp.data;
            });
        },

        // Persist model modifications to localStorage
        // TESTING
        // @params: Subscription object model.
        updateLocal : function(subscription) {
            PersistenceService.updateModel('s' + subscription.id, subscription);
        },

        // Persist the subscription model modification to remote storage.
        // TESTING
        // @params: Subscription object model.
        // @return: Promise indicating success/failure
        updateDownloadRemote : function(subscription) {
            var url = 'api/index.php?entity=subscription&action=update&val=' +
                subscription.auto_download + '&id=' + subscription.id;
            return $http.get(url).then(function(rsp){
                return rsp.data;
            });
        },

        // Iterate through the collection of subscription objects
        // persisting each to local storage.
        // @params: Array of subscription model objects.
        persistBulkModels : function(subscriptions) {
            _.each(subscriptions, function(subscription, index, list) {
                PersistenceService.save('s' + index, subscription);
            });
        },

        // Persist the subscription collection to localStorage.
        // @params: Array of subscrition objects.
        persistCollection : function(collection) {
            PersistenceService.save('SubscriptionCollection', _.keys(collection));
        }
    };
}]);

