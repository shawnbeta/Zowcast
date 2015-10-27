(function() {
    'use strict';

    angular
        .module('app.player')
        .factory('PlayerService', PlayerService);

    PlayerService.$inject = ['$interval', '$sce'];

    function PlayerService($interval, $sce){

        var ticker;
        return {

            firstRun: true,

            initializePlayerObject: function(){

                return  {
                    status: null, // Player playback status
                    elementWrapper: null,
                    element: null, // jQuery to get the video or audio element
                    loadedEpisode:{id: null}, // the episode in the player
                    counter: null
                }
            },

            togglePlayback: function( playerObject, episode ){
                if(episode.id !== playerObject.loadedEpisode.id){
                    playerObject = this.loadMedia( playerObject, episode );
                    this.firstRun = true;
                }else{
                    this.firstRun = false;
                }
                playerObject.status != 'playing' || playerObject.status == 'playing' && this.firstRun ?
                    this.playAction( playerObject, this.firstRun ) : this.pauseAction( playerObject );
            },

            togglePlaybackIcon: function( playerObject, episode ){
                return playerObject.loadedEpisode == episode
                && playerObject.status == 'paused' ? 'pause' : 'play'
            },

            loadMedia: function( playerObject, episode ){
                var mediaType = episode.mediaType == 0 ? 'audio' : 'video';
                playerObject.loadedEpisode = episode;
                playerObject.element = document.getElementsByTagName(mediaType)[0];

                // Added for testing.
                if(!document.getElementsByTagName(mediaType)[0])
                    playerObject.element = document.createElement(mediaType);


                // Skip this in testing.
                if(document.getElementsByTagName(mediaType)[0])
                    playerObject.elementWrapper =  jQuery('#' + mediaType + 'Player');

                playerObject.loadedEpisode.location = $sce.trustAsResourceUrl(episode.src);

                return playerObject;
            },

            startCounter: function( playerObject ){
                var self = this;
                ticker = $interval(function( ){
                    self.updateCounter( playerObject );
                }, 1000);
            },

            pauseCounter: function(){
                console.log('paused')
                if(angular.isDefined(ticker)){
                    $interval.cancel(ticker);
                    ticker = undefined;
                }
            },

            updateCounter: function( playerObject ){
                var time = playerObject.element.currentTime;
                var pad = function(val){
                    return val > 9 ? val : "0" + val;
                };
                var sec = Math.floor(time);
                var counter = {};
                counter.seconds = pad(++sec % 60);
                counter.minutes = pad(pad(parseInt(sec / 60, 10) % 60));
                counter.hours = pad(parseInt(sec / 3600, 10));
                playerObject.counter = counter;
            },

            getDuration: function( duration ){
                var pad = function(val){
                    return val > 9 ? val : "0" + val;
                };
                var sec = Math.floor(duration);
                var counter = {};
                counter.seconds = pad(++sec % 60);
                counter.minutes = pad(pad(parseInt(sec / 60, 10) % 60));
                counter.hours = pad(parseInt(sec / 3600, 10));
                return counter;
            },

            playAction: function( playerObject, firstRun ){
                console.log(firstRun);
                var self = this;
                this.startCounter( playerObject );
                playerObject.status = 'playing';
                playerObject.episodePlaying = playerObject.loadedEpisode.id;
                if(firstRun){
                    playerObject.element.oncanplay = function(){
                        playerObject.element.play();
                        playerObject.runtime = self.getDuration(playerObject.element.duration);
                    };
                }else{
                    playerObject.element.play();
                }
                //return playerObject;
            },

            pauseAction: function( playerObject ){
                this.pauseCounter();
                playerObject.element.pause();
                playerObject.status = 'paused';
                playerObject.episodePlaying = false;
                return playerObject;
            },

            //setLocation: function( percentage, playerObject ){
            //    playerObject.element.currentTime = playerObject.element.duration * percentage;
            //},
            //

            rewind: function( playerObject ){
                var currentTime = parseInt(playerObject.element.currentTime);
                playerObject.element.currentTime = currentTime - 20;
                return playerObject;
            },

            forward: function( playerObject ){
                var currentTime = parseInt(playerObject.element.currentTime);
                playerObject.element.currentTime = currentTime + 20;
                return playerObject;
            },

            jumpBack: function( playerObject ){
                var currentTime = parseInt(playerObject.element.currentTime);
                playerObject.element.currentTime = currentTime - 300;
                return playerObject;
            },

            jumpAhead: function( playerObject ){
                var currentTime = parseInt(playerObject.element.currentTime);
                playerObject.element.currentTime = currentTime + 300;
                return playerObject;
            },

            volumeDown: function( playerObject ){
                playerObject.element.volume-=0.1;
                return playerObject;
            },

            volumeUp: function( playerObject ){
                playerObject.element.volume+=0.1;
                return playerObject;
            },

            setVolumeTo: function( playerObject ){
                playerObject.element.volume=val;
                return playerObject;
            }

        };

    }
})();




 