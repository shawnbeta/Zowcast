app.player.factory('PlayerService',
    ['$rootScope', '$interval', '$sce', 'EpisodeService', 'UtilityService',
    function($rootScope, $interval, $sce, EpisodeService, UtilityService){

        var firstRun = true;
        var ticker;
    return {

        initializePlayerObject: function(){

            return  {
                status: null, // Player playback status
                elementWrapper: null,
                element: null, // jQuery to get the video or audio element
                loadedEpisode:{id: null}, // the episode in the player
                counter: null
            }
        },

        togglePlayback: function(episode){
            if(episode.id !== $rootScope.playerObject.loadedEpisode.id){
                $rootScope.playerObject = this.loadMedia(episode);
                firstRun = true;
                console.log('fsdfasd');
            }else{
                firstRun = false;
            }
            $rootScope.playerObject.status != 'playing' ? this.playAction(firstRun) : this.pauseAction();
        },

        loadMedia: function(episode){
            var mediaType = episode.mediaType == 0 ? 'audio' : 'video';
            $rootScope.playerObject.loadedEpisode = episode;
            $rootScope.playerObject.element = document.getElementsByTagName(mediaType)[0];

            // Added for testing.
            if(!document.getElementsByTagName(mediaType)[0])
                $rootScope.playerObject.element = document.createElement(mediaType);


            $rootScope.playerObject.element.ontimeupdate = function(){

            };

            //$rootScope.playerObject.element.addEventListener("seeking", self.updateCounter());
            // Skip this in testing.
            if(document.getElementsByTagName(mediaType)[0])
                $rootScope.playerObject.elementWrapper =  jQuery('#' + mediaType + 'Player');

            $rootScope.playerObject.loadedEpisode.location = $sce.trustAsResourceUrl(episode.src);
            return $rootScope.playerObject;
        },

        startCounter: function(){
            if(angular.isDefined(ticker)) return;
            var self = this;
            ticker = $interval(function(){
                self.updateCounter($rootScope.playerObject);
            }, 1000);
        },

        pauseCounter: function(){
            if(angular.isDefined(ticker)){
                $interval.cancel(ticker);
                ticker = undefined;
            }
        },

        updateCounter: function(playerObj){
            var time = playerObj.element.currentTime;
            pad = function(val){
                return val > 9 ? val : "0" + val;
            };
            sec = Math.floor(time);
            var counter = {};
            counter.seconds = pad(++sec % 60);
            counter.minutes = pad(pad(parseInt(sec / 60, 10) % 60));
            counter.hours = pad(parseInt(sec / 3600, 10));
            playerObj.counter = counter;
        },

        togglePlaybackIcon: function( episode){
            return $rootScope.playerObject.loadedEpisode == episode
            && $rootScope.playerObject.status == 'paused' ? 'pause' : 'play'
        },

        playAction: function(firstRun){
            this.startCounter();
            $rootScope.playerObject.status = 'playing';
            $rootScope.episodePlaying = $rootScope.playerObject.loadedEpisode.id;
            if(firstRun){
                $rootScope.playerObject.element.oncanplay = function(){
                    $rootScope.playerObject.element.play();
                };
            }else{
                $rootScope.playerObject.element.play();
            }
        },

        pauseAction: function(){
            this.pauseCounter();
            $rootScope.playerObject.element.pause();
            $rootScope.playerObject.status = 'paused';
            $rootScope.episodePlaying = null;
        },

        //updateCounter: function(){
        //    var time = $rootScope.playerObject.element.currentTime;
        //    pad = function(val){
        //        return val > 9 ? val : "0" + val;
        //    };
        //    var sec = Math.floor(time);
        //    counter.seconds = pad(++sec % 60);
        //    counter.minutes = pad(pad(parseInt(sec / 60, 10) % 60));
        //    counter.hours = pad(parseInt(sec / 3600, 10));
        //
        //    $rootScope.playerObject.counter = counter;
        //    // Fills out the slide
        //    var percentageOfEpisode =
        //        ($rootScope.playerObject.element.currentTime/$rootScope.playerObject.element.duration);
        //    var percentageOfSlider = document.getElementById('zowSlider').offsetWidth * percentageOfEpisode;
        //    jQuery('.progressTracker').width(Math.round(percentageOfSlider) + "px");
        //},




        setLocation: function(percentage){
            console.log(percentage);
            console.log($rootScope.playerObject.element.currentTime);
            $rootScope.playerObject.element.currentTime = $rootScope.playerObject.element.duration * percentage;
        },


        rewind: function(){
            var currentTime = parseInt($rootScope.playerObject.element.currentTime);
            $rootScope.playerObject.element.currentTime = currentTime - 20;
            return $rootScope.playerObject;
        },

        forward: function(){
            var currentTime = parseInt($rootScope.playerObject.element.currentTime);
            $rootScope.playerObject.element.currentTime = currentTime + 20;
            return $rootScope.playerObject;
        },

        jumpBack: function(){
            var currentTime = parseInt($rootScope.playerObject.element.currentTime);
            $rootScope.playerObject.element.currentTime = currentTime - 300;
        },

        jumpAhead: function(){
            var currentTime = parseInt($rootScope.playerObject.element.currentTime);
            $rootScope.playerObject.element.currentTime = currentTime + 300;
        },

        volumeDown: function(){
            $rootScope.playerObject.element.volume-=0.1;
        },

        volumeUp: function(){
            $rootScope.playerObject.element.volume+=0.1;
        },

        setVolumeTo: function(){
            $rootScope.playerObject.element.volume=val;
        }

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



        
    };
}]); 

  



 