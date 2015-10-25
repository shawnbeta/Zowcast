//jQuery(document).ready(function(){
//    var counter = {};
//
//    var updateCounter = function(mediaType){
//        var mediaPlayer = document.getElementsByTagName(mediaType)[0];
//        var time = document.getElementsByTagName(mediaType)[0].currentTime;
//        pad = function(val){
//            return val > 9 ? val : "0" + val;
//        };
//        sec = Math.floor(time);
//        counter.seconds = pad(++sec % 60);
//        counter.minutes = pad(pad(parseInt(sec / 60, 10) % 60));
//        counter.hours = pad(parseInt(sec / 3600, 10));
//
//        jQuery('.counterSeconds').html(counter.seconds);
//        jQuery('.counterMinutes').html(counter.minutes);
//        jQuery('.counterHours').html(counter.hours);
//    };
//
//    var setSlider = function(mediaPlayer){;
//        // Fills out the slide
//        var percentageOfEpisode =
//            (mediaPlayer.currentTime/mediaPlayer.duration);
//        var percentageOfSlider = document.getElementById('zowSlider').offsetWidth * percentageOfEpisode;
//        jQuery('.progressTracker').width(Math.round(percentageOfSlider) + "px");
//    }
//
//    var audio = document.getElementsByTagName('audio')[0];
//    var video = document.getElementsByTagName('video')[0];
//
//    audio.ontimeupdate = function(){
//        console.log('working');
//        updateCounter('audio');
//        setSlider(audio);
//    };
//
//    video.ontimeupdate = function(){
//        updateCounter('video');
//        setSlider(video);
//    };
//
//
//});