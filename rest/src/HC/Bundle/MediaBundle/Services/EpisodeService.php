<?php
namespace HC\Bundle\MediaBundle\Services;
use HC\Bundle\MediaBundle\Entity\Episode;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use HC\Bundle\MediaBundle\Services\Parsers\SimplePieService;
use HC\Bundle\MediaBundle\Services\Parsers\ZetaXMLService;
use HC\Bundle\UtilityBundle\Services\UtilityService;
use DateTime;
class EpisodeService extends MediaService
{

	/**
	 * Move episode data from array into an Episode entity
	 * @param array of data from feed parser
	 * @return Episode entity
	 */
	public function createEpisodeEntity($data, $subscription)
	{
		$Episode = new Episode();
		$Episode->setTitle($data['title']);
		$Episode->setDescription($data['description']);
		$Episode->setSrc($data['src']);
		$Episode->setImg($subscription->getImg());
		$Episode->setPubDate($data['pubDate']);
		$Episode->setWatched(false);
		$Episode->setBookmark(0.0);
		$Episode->setMediaType($subscription->getMediaType());
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

	/**
	 * Iterates through each episode array in the collection
	 * @param doctrine entity manager, array of episode array data,
	 * Subscription entity
	 * @return Episode entity
	 */
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
			array_push($episodeCollection, $this->getEpisodeArray($Episode));
		}
		$em->flush(); //Persist objects that did not make up an entire batch
		$em->clear();
		return $episodeCollection;
	}

	public function updateEpisode($em, $episode, $field, $newValue)
	{
		if($field == 0)
			return $this->updateWatched($em, $episode, $newValue);
		return $this->updateBookmark($em, $episode, $newValue);
	}

	private function updateWatched($em, $episode, $newValue)
	{
		print $newValue;
		print $episode->getId();
		$ogEpisode = $episode;
		$episode->setWatched($newValue);
		$em->persist($episode);
		$em->flush();
		return $episode->getWatched() === $ogEpisode->getWatched();
	}

	private function updateBookmark($em, $episode, $newValue)
	{
		$ogEpisode = $episode;
		$episode->setBookmark($newValue);
		$em->persist($episode);
		$em->flush();
		return $episode->getBookmark() === $ogEpisode->getBookmark();
	}


	public function getEpisodeArray($episode)
	{
		return array(
			'id' => $episode->getId(),
			'title' => $episode->getTitle(),
			'description' => $episode->getDescription(),
			'src' => $episode->getSrc(),
			'img' => $episode->getImg(),
			'createDate' => $episode->getCreateDate(),
			'modifiedDate' => $episode->getModifiedDate(),
			'public' => $episode->getPublic(),
			'pubDate' => $episode->getPubDate(),
			'watched' => $episode->getWatched(),
			'bookmark' => $episode->getBookmark(),
			'mediaType' => $episode->getMediaType(),
			'subscription' => $episode->getSubscription()->getId()
		);
	}

	public function deleteOldEpisodes($em, $dateToCompare)
	{
		return $em->deleteOldEpisodes('pub_date', $dateToCompare, '<');
	}

	/**
	 * Iterates through each subscription gathering new episodes since last update array in the collection
	 * @param doctrine entity manager, array of episode array data,
	 * Subscription entity
	 * @return Episode entity
	 */
	public function gatherNewEpisodes($sr, $em)
	{

		// Collect all public subscriptions
		$subscriptions = $sr->findByPublic(true);
		$configService = $this->getConfigService();
		$fp = fopen($configService::FILES . 'last-update.txt', 'w+');
		$lastUpdateInt = (int)fgets($fp);
		fclose($fp);

		//print $lastUpdateInt;

		$subscriptionService = new SubscriptionService();

		$count = count($subscriptions);
		for ($i = 0; $i < $count; $i++) {
			// Get data with SimplePie first
			$simplepie = new SimplePieService($subscriptions[$i]->getSrc());
			$episodes = $simplepie->getEpisodeCollection($lastUpdateInt);

			//Check for empty fields
			// If the subscription array has any empty values try the ZetaService
			// Then fold the missing values together
//			if (in_array("", $episodes)) {
//				$rsp = $subscriptionService->checkForEmptyFields(new ZetaXMLService(), null, $episodes, $lastUpdateInt);
//				$episodes = $rsp['episodes'];
//			}

			$rsp = $this->buildBulkEpisodes($em, $episodes, $subscriptions[$i]);
			print count($rsp);
		}
		$currentDate = new \DateTime;
		//var_dump(new DateTime('now'));
		$newLastUpdate = (strtotime($currentDate->format('Y-m-d H:i:s'))) * 1000;
		//print $newLastUpdate;
		$fp = fopen($configService::FILES . 'last-update.txt', 'w+');
		fwrite($fp, $newLastUpdate);
		fclose($fp);
		return array("success" => true);
	}

}