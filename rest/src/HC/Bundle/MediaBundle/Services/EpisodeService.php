<?php
namespace HC\Bundle\MediaBundle\Services;
use HC\Bundle\MediaBundle\Entity\Episode;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Serializer\Serializer;

class EpisodeService
{

	private $serializer;

	public function getSerializer()
	{
		if(isset($this->serializer))
			return $this->serializer;
		return $this->serializer = new Serializer();
	}

	public function createEpisodeEntity($data, $subscription)
	{
		$Episode = new Episode();
		$Episode->setTitle($data['title']);
		$Episode->setDescription($data['description']);
		$Episode->setSrc($data['src']);
		$Episode->setImg($data['img']);
		$Episode->setPubDate($data['pubDate']);
		$Episode->setWatched($data['watched']);
		$Episode->setBookmark($data['bookmark']);
		$Episode->setSubscription($subscription);
		return $Episode;
	}

	public function buildBulkEpisodes($em, $data, $subscription)
	{
		$batchSize = 20;
		$episodeCollection = array();
		$count = count($data);
		for ($i=0; $i <= $count; $i++) {
			$Episode = $this->createEpisodeEntity($data, $subscription);
			$em->persist($Episode);
			if(($i % $batchSize) === 0) {
				$em->flush();
				$em->clear(); // Detaches all objects from Doctrine!
			}
			array_push($episodeCollection, $this->serializer->serialize($Episode));
		}
		$em->flush(); //Persist objects that did not make up an entire batch
		$em->clear();
		return $episodeCollection;
	}

	public function updateEpisode($episodeRepository, $field, $id, $newValue)
	{
		$episode = $episodeRepository->find($id);
		if($field == 'watched')
			return $this->updateWatched($episode, $newValue);
		return $this->updateBookmark($episode, $newValue);
	}

	private function updateWatched($episode, $newValue)
	{
		$ogEpisode = $episode;
		$episode->setWatched($newValue);
		return $episode->getWatched() === $ogEpisode->getWatched();
	}

	private function updateBookmark($episode, $newValue)
	{
		$ogEpisode = $episode;
		$episode->setBookmark($newValue);
		return $episode->getBookmark() === $ogEpisode->getBookmark();
	}

}