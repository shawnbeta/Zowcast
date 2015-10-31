<?php
namespace HC\Bundle\MediaBundle\Services\Parsers;

class ZetaXMLService
{

    private $rawData;

    public function __construct($src){
        $zeta = \ezcFeed::parse($src);
        $this->rawData = $zeta;
    }

    public function getSubscriptionArray(){
        return array(
            'title' => $this->rawData->title->text,
            'description' => $this->rawData->description->text,
            'homePage' => $this->rawData->link[0]->href,
            'img' => $this->rawData->image->url
        );
    }

    public function getEpisodeCollection($dateAgo){
        $episodeCollection = array();
        $itemCollection = $this->rawData->item;
        $collectionCount = count($itemCollection);
        for($i=0; $i<$collectionCount; $i++){
            // Get the image if one exist
            $img = 'blank';
            // Check on file options
            $pubDateObj = $itemCollection[$i]->published->date;
            $pubDateInt = strtotime($pubDateObj->format('Y-m-d H:i:s')) * 1000;
            if($pubDateInt > $dateAgo){
                $episode = array(
                    "title" => $itemCollection[$i]->title->text,
                    "description" => $itemCollection[$i]->description->text,
                    "src" => $itemCollection[$i]->link[0]->href,
                    "pubDate" => $pubDateInt,
                    "img" => $img
                );
                array_push($episodeCollection, $episode);
            }
        }

        return $episodeCollection;
    }


}