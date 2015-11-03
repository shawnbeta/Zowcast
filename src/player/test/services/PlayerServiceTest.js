describe('PlayerService', function() {
    var PlayerService, _initPlayerObject;

    beforeEach(function(){
        module('app');
        module('app.media');
        module('app.player');
        module('app.utility');
        module('app.vendors');
        module('ngSanitize');
    });

    beforeEach(inject(function (_$sce_, _PlayerService_) {
        PlayerService = _PlayerService_;
        _initPlayerObject = PlayerService.initializePlayerObject();
        $sce = _$sce_;

    }));

    it('will initialize player', function(){

        //var playerObj =
        var comparativeObject = {
            status: null, // Player playback status
            elementWrapper: null,
            element: null, // jQuery to get the video or audio element
            loadedEpisode:{id: null}, // the episode in the player
            counter: null

        };

        var newPlayerObject = PlayerService.initializePlayerObject();

        expect(newPlayerObject).toEqual(comparativeObject);

    });

    it('will toggle correctly', function(){
        var episode = { id: 2, mediaType: 0 };

        _initPlayerObject.element = document.createElement("audio");

        var rsp = PlayerService.togglePlayback( _initPlayerObject, episode );
        console.log(rsp.element);
        console.log(rsp.element.paused)
        expect(rsp.element.paused).toBe(false);


    });

    //
    it('will load player with correct values', function(){

        // Create the element.
        //document.createElement("audio");

        var episode = {
            id: 4,
            mediaType: 0,
            src: 'http://localhost/zowcast/audioSample.mp3'
        };

        var newPlayerObject = PlayerService.loadMedia(_initPlayerObject, episode);

        var comparativeObject = _initPlayerObject;

        comparativeObject.loadedEpisoded = episode;
        comparativeObject.element = document.getElementsByTagName('audio')[0];
        comparativeObject.elementWrapper =  jQuery('#audioWrapper');
        comparativeObject.loadedEpisode.location = $sce.trustAsResourceUrl(episode.src);

        expect(newPlayerObject).toEqual(comparativeObject);
    });

    it('will return the correct toggle text', function(){

        var episode = 3;
        var firstRun = PlayerService.togglePlaybackIcon(_initPlayerObject, episode);
        expect(firstRun).toEqual('play');
        // Update the playerObj status
        _initPlayerObject.status = 'playing';
        var secondRun = PlayerService.togglePlaybackIcon(_initPlayerObject, episode);
        expect(secondRun).toEqual('play'); // Since both conditions are not met
        _initPlayerObject.loadedEpisode = 3;
        _initPlayerObject.status = 'paused';
        var thirdRun = PlayerService.togglePlaybackIcon(_initPlayerObject, episode);
        expect(thirdRun).toEqual('pause'); // All both conditions are met

    });

    it('will start playback', function(){
        _initPlayerObject.element = document.createElement("audio");
        var updatedPlayerObject = PlayerService.playAction(_initPlayerObject);
        expect(updatedPlayerObject.element.paused).toBe(false);


    });

    it('will pause playback', function(){
        _initPlayerObject.element = document.createElement("audio");
        _initPlayerObject.element.play();
        var updatedPlayerObject = PlayerService.pauseAction(_initPlayerObject);
        expect(updatedPlayerObject.element.paused).toBe(true);
    });



    //Load and play audio
    //it('will load and play audio', function(){
    //    var episode = {
    //        id: 4,
    //        mediaType: 0,
    //        src: 'http://localhost/zowcast/videoSample.mp4'
    //    };
    //
    //    //console.log(_initPlayerObject);
    //    //console.log(episode);
    //
    //    console.log('will load and play')
    //
    //    var updatedPlayerObject = PlayerService.togglePlayback(_initPlayerObject, episode);
    //    console.log(updatedPlayerObject);
    //
    //    expect(updatedPlayerObject.element.paused).toBe(false);
    //
    //    var updatedPlayerObjectA = PlayerService.togglePlayback(updatedPlayerObject, episode);
    //
    //    expect(updatedPlayerObjectA.element.paused).toBe(true);
    //
    //
    //
    //
    //
    //
    //});

    //// Pause playback
    //it('will pause media', function(){
    //
    //    var audioElement = document.createElement("audio");
    //
    //});
    //
    //// Resume playback
    //it('will resume playback media', function(){
    //
    //    var audioElement = document.createElement("audio");
    //
    //});





    // loadPlayer()
    //it('will load the player with Correct data', function(){
    //    // Make an audio element
    //    var audioElement = document.createElement("audio");
    //    // Add a media file for the player to engage.
    //    //audioElement.setAttribute('src', 'http://www.noiseaddicts.com/samples_1w72b820/274.mp3');
    //    var data = {
    //        element:  audioElement
    //    };
    //    var playerObj = PlayerService.createPlayerObj(data, 'audio');
    //
    //    var episode = {
    //        id: 999,
    //        src: 'http://www.noiseaddicts.com/samples_1w72b820/274.mp3'
    //    };
    //
    //
    //    //expect(PlayerService.loadPlayer(episode, playerObj)).toEqual(1);
    //    //expect(playerObj.toggleText).toBe('pause');
    //
    //
    //});

    // playAction()
    //it('will set play action on player', function(){
    //   // Make an audio element
    //    var audioElement = document.createElement("audio");
    //    // Add a media file for the player to engage.
    //    audioElement.setAttribute('src', 'http://www.noiseaddicts.com/samples_1w72b820/274.mp3');
    //    var data = {
    //        element:  audioElement
    //    };
    //    var playerObj = PlayerService.createPlayerObj(data, 'audio');
    //
    //    PlayerService.playAction(playerObj);
    //
    //    expect(playerObj.status).toEqual(1);
    //    expect(playerObj.toggleText).toBe('pause');
    //});

    // defaultPlayer()
    //it('will return a player object with props in place', function(){
    //
    //    var audioElement = document.createElement("audio");
    //    var player = PlayerService.defaultPlayer(audioElement, 'audio');
    //
    //    expect(player.element).toEqual(audioElement);
    //    expect(player.type).toEqual('audio');
    //});

    //// updateBookmark()
    //it('episode bookmark should be set at 420', function() {
    //    var episode = {id: 1, bookmark: 0};
    //    PlayerService.updateBookmark(episode, 420);
    //    var rsp = JSON.parse(localStorage.getItem('e1'));
    //    expect(rsp.bookmark).toEqual(420);
    //});
    //





});