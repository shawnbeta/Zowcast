(function() {
    'use strict';

    angular
        .module('app.media')
        .filter('ebs', ebs);

    EpisodeController.$inject = [ 'MediaService'];

    function ebs( MediaService ){

        return function(episodes) {
            if(MediaService.ebsIsActive){
                return _.filter(episodes, function(episode){
                    return episode.subscription == MediaService.activeSubscription.id;
                });
            }else{
                return episodes;
            }
        };
    }

})();