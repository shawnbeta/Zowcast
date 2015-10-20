app.media.factory('Episode', [
    function() {

        return {

            buildEpisode: function(episode, subscriptions){
                episode.id =  parseInt(episode.id);
                episode.watched = parseInt(episode.watched);
                episode.bookmark = parseFloat(episode.bookmark);
                episode.pub_date = parseInt(episode.pub_date);
                episode.duration = parseInt(episode.duration);
                episode.create_date = parseInt(episode.create_date);
                episode.modified_date = parseInt(episode.modified_date);
                episode.subscription_id = parseInt(episode.subscription_id);

                if(episode.img){
                    episode.img = episode.img;
                }else{
                    episode.img = subscriptions[this.subscription_id].img;
                }
                return episode;
            }
        }
    }
]);