(function() {
    'use strict';

    angular
        .module('app.media')
        .filter('ebsFilter', ebsFilter);

    ebsFilter.$inject = [ 'MediaService'];

    function ebsFilter( MediaService ){

        return function(episodes) {
            console.log(MediaService.ebsIsActive);
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