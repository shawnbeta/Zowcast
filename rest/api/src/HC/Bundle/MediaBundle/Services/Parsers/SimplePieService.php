<?php
namespace HC\Bundle\MediaBundle\Services\Parsers;
// use HC\Bundle\MediaBundle\Entity\Subscription;

class SimplePieService
{

    private $rawData;

    public function __construct($url){
        $simplePie = new \SimplePie();
        $simplePie->set_feed_url($url);
        $simplePie->init();
        $simplePie->handle_content_type();
        $this->rawData = $simplePie;
    }

    public function makeSubscriptionArray(){
        return array(
            'title' => $this->rawData->get_title(),
            'description' => $this->rawData->get_description(),
            'homePage' => $this->rawData->get_link(0),
            'img' => $this->rawData->get_image_url()
        );
    }

    public function makeEpisodeCollection($lu){

        $episodeCollection = array();
        $items = $this->rawData->get_items();
        foreach($items as $item){

            // Get the image if one exist
            $img = 'blank';
            // Check on file options
            $pubDateInt = strtotime($item->get_date()) * 1000;
            $durationArray = $item->get_item_tags('http://www.itunes.com/dtds/podcast-1.0.dtd', 'duration');
            $duration = $durationArray[0]['data'];

            if($pubDateInt > $lu){
                $episode = array(
                    "title" => $item->get_title(),
                    "description" => $item->get_description(),
                    "src" => $item->get_enclosure()->get_link(),
                    "pubDate" => $pubDateInt,
                    "img" => $img,
                    "duration" => $duration,
                );
                array_push($episodeCollection, $episode);
            }
        }

        return $episodeCollection;
    }


}