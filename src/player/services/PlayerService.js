app.player.factory('PlayerService',
    ['$rootScope', '$interval', '$sce', 'EpisodeService', 'UtilityService', '$rootScope',
    function($rootScope, $interval, $sce, EpisodeService, UtilityService, $rootScope){
        
        // This needs to be global so it's accessable from everywhere.
        var ticker;
        var rtime;
        var timeout = false;
        var delta = 200;
    
    return {



        // New Code
        initializePlayerObject: function(){
            return  {
                status: null, // Player playback status
                elementWrapper: null,
                element: null, // jQuery to get the video or audio element
                loadedEpisode:{id: null}, // the episode in the player
                style: null // audio or video
            }
        },

        loadMedia: function(playerObject, episode){
            var mediaType = episode.mediaType == 0 ? 'audio' : 'video';
            playerObject.loadedEpisode = episode;
            playerObject.element = document.getElementsByTagName(mediaType)[0];
            // Added for testing.
            if(!document.getElementsByTagName(mediaType)[0])
                playerObject.element = document.createElement("audio");
            playerObject.elementWrapper =  jQuery('#' + mediaType + 'Wrapper');
            playerObject.loadedEpisode.location = $sce.trustAsResourceUrl(episode.src);
            return playerObject;
        },

        togglePlaybackIcon: function(playerObject, episode){
            return playerObject.loadedEpisode == episode
            && playerObject.status == 'paused' ? 'pause' : 'play'
        },

        playAction: function(playerObject){
            playerObject.element.play();
            playerObject.element.oncanplay = function(){
                playerObject.element.play();
            };
            $rootScope.episodePlaying = playerObject.loadedEpisode.id;
            return playerObject;
        },

        pauseAction: function(playerObject){
            playerObject.element.pause();
            playerObject.status = 'paused';
            $rootScope.episodePlaying = null;
            return playerObject;
        },


        rewind: function(playerObject){
            var currentTime = parseInt.playerObject.element.currentTime;
            playerObject.element.currentTime = currentTime - 20;
            return playerObject;
        },

        forward: function(playerObject){
            var currentTime = parseInt(playerObject.element.currentTime);
            playerObject.element.currentTime = currentTime + 20;
            return playerObject;
        },

        jumpBack: function(playerObject){
            var currentTime = parseInt($rootScope.playerObject.element.currentTime);
            $rootScope.playerObject.element.currentTime = currentTime - 300;
            return playerObject;
        },

        jumpAhead: function(playerObject){
            var currentTime = parseInt($rootScope.playerObject.element.currentTime);
            $rootScope.playerObject.element.currentTime = currentTime + 300;
            return playerObject;
        },

        volumeDown: function(playerObject){
            playerObject.element.volume-=0.1;
            return playerObject;
        },

        volumeUp: function(playerObject){
            $rootScope.playerObject.element.volume+=0.1;
            return playerObject;
        },

        setVolumeTo: function(playerObject){
            $rootScope.playerObject.element.volume=val;
            return playerObject;
        },

        //startCounter: function(){
        //    if(angular.isDefined(ticker)) return;
        //    var self = this;
        //    ticker = $interval(function(){
        //        self.updateCounter(self.playerObj);
        //    }, 1000);
        //},
        //
        //stopCounter: function(){
        //    if(angular.isDefined(ticker)){
        //        $interval.cancel(ticker);
        //        ticker = undefined;
        //    }
        //},
        //
        //updateCounter: function(){
        //    var time = $rootScope.playerObject.element.currentTime;
        //    pad = function(val){
        //        return val > 9 ? val : "0" + val;
        //    };
        //    sec = Math.floor(time);
        //    var counter = {};
        //    counter.seconds = pad(++sec % 60);
        //    counter.minutes = pad(pad(parseInt(sec / 60, 10) % 60));
        //    counter.hours = pad(parseInt(sec / 3600, 10));
        //    $rootScope.playerObject.counter = counter;
        //},


        togglePlayback: function(episode, playerObject){
            if(episode.id !== playerObject.loadedEpisode.id){
                playerObject = this.loadMedia(playerObject, episode);
            }
            playerObject.status = playerObject.status == 'playing' ? 'paused' : 'playing';
             playerObject.status == 'playing' ? this.playAction(playerObject) : this.pauseAction(playerObject);
            return playerObject;
        }
        
    };
}]); 

  



 