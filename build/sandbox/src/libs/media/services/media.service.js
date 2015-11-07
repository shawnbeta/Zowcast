(function() {
    'use strict';

    angular
        .module('app.media')
        .factory('MediaService', MediaService);


    function MediaService(){

        var self = this;

        var mediaService = {
            episodes: [],
            subscriptions: [],
            ebsIsActive: false,
            activeSubscription: {},
            mediaPlayer: {
                loadedEpisode: {
                    id: null
                }
            },
            getMediaPlayer: getMediaPlayer,
            setEpisodes: setEpisodes,
            getEpisodes: getEpisodes,
            setSubscriptions: setSubscriptions,
            getSubscriptions: getSubscriptions,
            purgeAll: purgeAll,
            setEBS: setEBS,
            setActiveSubscription: setActiveSubscription
        };

        return mediaService;

        function getMediaPlayer(){
            return self.mediaPlayer;
        }

        function setEpisodes( episodeCollection ){
            Array.prototype.push.apply(mediaService.episodes, episodeCollection); // Works! the solution?
        }

        function getEpisodes(){
            return self.episodes;
        }

        function setSubscriptions( subscriptionCollection ){
            console.log(subscriptionCollection);
            Array.prototype.push.apply(mediaService.subscriptions, subscriptionCollection); // Works! the solution?
        }

        function getSubscriptions(){
            return self.subscriptions;
        }

        function purgeAll(){
            mediaService.subscriptions = [];
            mediaService.episodes = [];
        }

        function setEBS( val ){
            mediaService.ebsIsActive = val;
        }

        function setActiveSubscription( subscription ){
            mediaService.activeSubscription.id = subscription.id;
            mediaService.activeSubscription.title = subscription.title;
        }





    }


})();
