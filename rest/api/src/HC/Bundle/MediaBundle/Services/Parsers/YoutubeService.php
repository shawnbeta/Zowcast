<?php
namespace HC\Bundle\MediaBundle\Services\Parsers;

class YoutubeService
{

    public function fetchChannelData($src, $apiKey){
        return json_decode(file_get_contents( 'https://www.googleapis.com/youtube/v3/channels?' . 'part=snippet&' .
            'id=' . $src . '&' . 'key=' . $apiKey));
    }

    public function fetchEpisodeData($src, $apiKey, $count = 50)
    {
        return json_decode(file_get_contents( 'https://www.googleapis.com/youtube/v3/activities?' .
            'part=id%2C+snippet%2C+contentDetails&' . 'channelId='. $src . '&'. 'maxResults='. $count .
            '&fields=items(contentDetails%2Csnippet)&' . 'key=' . $apiKey));
    }

    public function makeSubscriptionArray($rawChannelData){
        $item = $rawChannelData->items[0]->snippet;
        return array(
            'title' => $item->title,
            'description' => $item->description,
            'homePage' => $rawChannelData->items[0]->id,
            'img' => $item->thumbnails->high->url
        );
    }

    public function makeEpisodeCollection($rawEpisodeData, $lu){

        $episodeCollection = array();
        $items = $rawEpisodeData->items;

        foreach ($items as $item) {

            // Check on file options

            $snippet = $item->snippet;

            $pubDateObj = new \DateTime($snippet->publishedAt);
            $pubDateInt = strtotime($pubDateObj->format('Y-m-d H:i:s')) * 1000;;

            if(isset($snippet->title) && isset($pubDateInt)
                && $pubDateInt > $lu
                && isset($item->contentDetails->upload->videoId)){
                // Get the image if one exist
                $img = 'blank';
                $episode = array(
                    "title" => $snippet->title,
                    "description" => $snippet->description,
                    "src" => $item->contentDetails->upload->videoId,
                    "pubDate" => $pubDateInt
                );
                if(isset($snippet->thumbnails->standard))
                    $episode['img'] = $snippet->thumbnails->standard->url;
                array_push($episodeCollection, $episode);
            }
        }

        return $episodeCollection;
    }


}