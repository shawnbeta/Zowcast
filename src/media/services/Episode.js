app.media.factory('Episode', [
    function() {

        return {

            devEpisode: function(id){
                return {
                    id: 88 + id,
                    title: 'Test Episode' + id,
                    description: 'This is a test for an Episode object' + id,
                    src : 'http:shawnbeta.com' + id,
                    watched: 0,
                    bookmark: 2.2,
                    pub_date: 555,
                    create_date: 1543,
                    modified_date: 661,
                    subscription_id: 10
                }
            },

            buildEpisode: function(episode, subscriptions){
                episode.id =  parseInt(episode.id);
                episode.watched = parseInt(episode.watched);
                episode.bookmark = parseFloat(episode.bookmark);
                episode.pub_date = parseInt(episode.pub_date);
                episode.duration = parseInt(episode.duration);
                episode.create_date = parseInt(episode.create_date);
                episode.modified_date = parseInt(episode.modified_date);
                episode.subscription_id = parseInt(episode.subscription_id);

                if(!episode.img)
                    episode.img = subscriptions[episode.subscription_id].img;

                return episode;
            }
        }
    }
]);