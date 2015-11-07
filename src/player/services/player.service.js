(function() {
    'use strict';

    angular
        .module('app.player')
        .factory('PlayerService', PlayerService);

    PlayerService.$inject = ['$interval', '$sce', 'MediaService', 'LoadingService'];

    function PlayerService($interval, $sce, MediaService, LoadingService){

        var ticker;

        var playerService = {

            togglePlayback: togglePlayback,
            loadMedia: loadMedia,
            togglePlaybackIcon: togglePlaybackIcon,
            playAction: playAction,
            pauseAction: pauseAction,
            getDuration: getDuration,
            rewind: rewind,
            forward: forward,
            jumpAhead: jumpAhead,
            jumpBack: jumpBack,
            volumeDown: volumeDown,
            volumeUp: volumeUp,
            setVolumeTo: setVolumeTo,
            goFullScreen: goFullScreen
        };

        return playerService;


        function togglePlayback( episode ){
            var mediaPlayer = MediaService.mediaPlayer;
            var firstRun;
            if(episode.id !== mediaPlayer.loadedEpisode.id){
                mediaPlayer = loadMedia(episode);
                firstRun = true;
            }
            if(mediaPlayer.status != 'playing' || mediaPlayer.status == 'playing' && firstRun)
                return playAction( firstRun );
            return pauseAction();
        }

        function loadMedia( episode ){
            var mediaPlayer = MediaService.mediaPlayer;
            mediaPlayer.loadedEpisode = episode;
            var mediaType = episode.mediaType === 0 ? 'audio' : 'video';
            mediaPlayer.element = document.getElementsByTagName(mediaType)[0];
            mediaPlayer.elementWrapper =  jQuery('#' + mediaType + 'Player');
            //mediaPlayer.element.src = $sce.trustAsResourceUrl(episode.src);
            mediaPlayer.loadedEpisode.location = $sce.trustAsResourceUrl(episode.src);
            return mediaPlayer;
        }

        function togglePlaybackIcon( episode ){
            return MediaService.mediaPlayer.loadedEpisode == episode && MediaService.mediaPlayer.status != 'paused' ?
                'pause' : 'play';
        }

        function playAction(  firstRun ){
            LoadingService.displayLoading(true);
            var mediaPlayer = MediaService.mediaPlayer;
            startCounter( );
            mediaPlayer.status = 'playing';
            mediaPlayer.episodePlaying = mediaPlayer.loadedEpisode.id;
            if(firstRun){
                mediaPlayer.element.oncanplay = function(){
                    mediaPlayer.element.play();
                    mediaPlayer.runtime = getDuration(mediaPlayer.element.duration);
                    LoadingService.displayLoading(false);
                };
            }else{
                LoadingService.displayLoading(false);
                mediaPlayer.element.play();
            }


            return mediaPlayer;
        }

        function pauseAction( ){
            var mediaPlayer = MediaService.mediaPlayer;
            pauseCounter();
            mediaPlayer.element.pause();
            mediaPlayer.status = 'paused';
            mediaPlayer.episodePlaying = false;
            LoadingService.displayLoading(false);
            return mediaPlayer;
        }

        function startCounter(  ){
            ticker = $interval(function( ){
                updateCounter(  );
            }, 1000);
        }

        function pauseCounter(){
            if(angular.isDefined(ticker)){
                $interval.cancel(ticker);
                ticker = undefined;
            }
        }

        function updateCounter(  ){
            var time = MediaService.mediaPlayer.element.currentTime;
            var pad = function(val){
                return val > 9 ? val : "0" + val;
            };
            var sec = Math.floor(time);
            var counter = {};
            counter.seconds = pad(++sec % 60);
            counter.minutes = pad(pad(parseInt(sec / 60, 10) % 60));
            counter.hours = pad(parseInt(sec / 3600, 10));
            MediaService.mediaPlayer.counter = counter;
        }

        function getDuration( duration ){
            var pad = function(val){
                return val > 9 ? val : "0" + val;
            };
            var sec = Math.floor(duration);
            var counter = {};
            counter.seconds = pad(++sec % 60);
            counter.minutes = pad(pad(parseInt(sec / 60, 10) % 60));
            counter.hours = pad(parseInt(sec / 3600, 10));
            return counter;
        }

        function rewind(){
            var currentTime = parseInt(MediaService.mediaPlayer.element.currentTime);
            MediaService.mediaPlayer.element.currentTime = currentTime - 20;
            return MediaService.mediaPlayer;
        }

        function forward(){
            var currentTime = parseInt(MediaService.mediaPlayer.element.currentTime);
            MediaService.mediaPlayer.element.currentTime = currentTime + 20;
            return MediaService.mediaPlayer.element;
        }

        function jumpBack(){
            var currentTime = parseInt( MediaService.mediaPlayer.element.currentTime);
            MediaService.mediaPlayer.element.currentTime = currentTime - 300;
            return MediaService.mediaPlayer.element;
        }

        function jumpAhead(){
            var currentTime = parseInt(MediaService.mediaPlayer.element.currentTime);
            MediaService.mediaPlayer.element.currentTime = currentTime + 300;
            return MediaService.mediaPlayer.element;
        }

        function volumeDown(){
            MediaService.mediaPlayer.element.volume-=0.1;
            return MediaService.mediaPlayer.element;
        }

        function volumeUp(){
            MediaService.mediaPlayer.element.volume+=0.1;
            return MediaService.mediaPlayer.element;
        }

        function setVolumeTo(){
            MediaService.mediaPlayer.element.volume=val;
            return MediaService.mediaPlayer.element;
        }

        function goFullScreen() {
            var video = MediaService.mediaPlayer.element;
            if (video.requestFullscreen) {
                video.requestFullscreen();
            } else if (video.mozRequestFullScreen) {
                video.mozRequestFullScreen(); // Firefox
            } else if (video.webkitRequestFullscreen) {
                video.webkitRequestFullscreen(); // Chrome and Safari
            }
        }

    }
})();




 