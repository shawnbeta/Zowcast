<?php
namespace HC\Bundle\MediaBundle\Services;
use HC\Bundle\MediaBundle\Entity\Episode;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;


class EpisodeService extends MediaService
{

	public function createEpisodeEntity($data, $subscription)
	{
		$Episode = new Episode();
		$Episode->setTitle($data['title']);
		$Episode->setDescription($data['description']);
		$Episode->setSrc($data['src']);
		$Episode->setImg($data['img']);
		$Episode->setPubDate($data['pubDate']);
		$Episode->setWatched(false);
		$Episode->setBookmark(0.0);
		$Episode->setSubscription($subscription);
		// Use the current date/time for create and modified dates
		$dateAgo = new \DateTime;
		$currTimeInt = (strtotime($dateAgo->format('Y-m-d H:i:s'))) * 1000;
		$Episode->setCreateDate($currTimeInt);
		$Episode->setModifiedDate($currTimeInt);
		// Set public if working on DEV server
		// If adding subscription on PROD result will be false
		$configService = $this->getConfigService();
		$Episode->setPublic($_SERVER['SERVER_NAME'] === $configService::DEV_SERVER_PATH);
		return $Episode;
	}

	public function buildBulkEpisodes($em, $episodes, $subscription)
	{
		$batchSize = 20;
		$episodeCollection = array();
		$count = count($episodes);
		for ($i=0; $i < $count; $i++) {
			$Episode = $this->createEpisodeEntity($episodes[$i], $subscription);
			$em->persist($Episode);
			if(($i % $batchSize) === 0) {
				$em->flush();
				//$em->clear(); // Detaches all objects from Doctrine!
			}
			array_push($episodeCollection, $this->getSerializer()->serialize($Episode, 'json'));
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