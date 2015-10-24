<?php
namespace HC\Bundle\MediaBundle\Services;

use HC\Bundle\MediaBundle\Entity\Episode;
use HC\Bundle\MediaBundle\Entity\Subscription;
use HC\Bundle\MediaBundle\Services\Parsers\SimplePieService;
use HC\Bundle\MediaBundle\Services\Parsers\ZetaXMLService;
use HC\Bundle\UtilityBundle\Services\UtilityService;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use HC\Bundle\CoreBundle\Services\ConfigService;

class SubscriptionService extends MediaService
{

	private function checkForEmptyFields($zeta, $subscription = null, $episodes = null, $dateAgo)
	{
		if(in_array("", $subscription, true) && $subscription != null){
			$zetaSubscription = $zeta->getSubscriptionArray();
			$diff = array_diff($subscription, $zetaSubscription);
			$subscription = array_merge($zetaSubscription, $diff);
		}

		// If the subscription array has any empty values try the ZetaService
		// Then fold the missing values together
		if(in_array("", $episodes, true) && $episodes != null){
			$zetaEpisodes = $zeta->getEpisodeCollection($dateAgo);
			$diff = array_diff($episodes, $zetaEpisodes);
			$episodes = array_merge($zetaEpisodes, $diff);
		}
		return array('subscription' => $subscription, 'episodes' => $episodes);
	}

	private function getSyncArrays($subscriptions, $episodes)
	{

		$media = array('subscriptions' => array(), 'episodes' => array());

		$count = count($subscriptions);
		for($i=0;$i<$count; $i++){
			array_push($media['subscriptions'], $this->getSubscriptionArray($subscriptions[$i]));
		}

		$episodeService = new EpisodeService();
		$count = count($episodes);
		for($i=0;$i<$count; $i++){
			array_push($media['episodes'],  $episodeService->getEpisodeArray($episodes[$i]));
		}

		return $media;
	}

	public function add($em, $src = null){
		$rsp = array();

		// Return error if $src is empty
		if(!isset($src))
			return array('success' => false, 'errorCode' => 'emptyField');
		$configService = $this->getConfigService();
		$dateAgo = $this->getUtilityService()->getDateAgo($configService::EPISODE_DAY_MAX);

		// Check to see if the value is url (XML feed) or Youtube channel ID
		// If the input is a URL for XML Feed
		if(filter_var($src, FILTER_VALIDATE_URL)){

			// Get data with SimplePie first
			$simplepie = new SimplePieService($src);
			$subscription = $simplepie->getSubscriptionArray();
			$episodes = $simplepie->getEpisodeCollection($dateAgo);

			//Check for empty fields
			// If the subscription array has any empty values try the ZetaService
			// Then fold the missing values together
//			if(in_array("", array_merge($subscription, $episodes))){
//				$rsp = $this->checkForEmptyFields( new ZetaXMLService(), $subscription, $episodes, $dateAgo);
//				$subscription = $rsp['subscription'];
//				$episodes = $rsp['episodes'];
//			}

			$subscription = $this->createSubscriptionEntity(new Subscription(), $subscription, $src, $episodes[0]['src']);
			$em->persist($subscription);
			$em->flush($subscription);

			$episodeService = new EpisodeService();
			$episodes = $episodeService->buildBulkEpisodes($em, $episodes, $subscription);
			$rsp = array('subscription' => $this->getSubscriptionArray($subscription), 'episodes' => $episodes);
		}else {
			// Youtube
		}

		return $rsp;

	}

	public function createSubscriptionEntity(Subscription $Subscription, $data, $src, $singleEpisode)
	{
		$Subscription->setTitle($data['title']);
		$Subscription->setDescription($data['description']);
		$Subscription->setSrc($src);
		$Subscription->setImg($data['img']);
		// Instead of relying on user input check one of the episode files for the media type
		// Start with an array of all audio extensions
		$audioExtensions = array("mp3", "ogg", "wav");
		$fileExtension = pathinfo($singleEpisode)['extension'];
		if(in_array($fileExtension, $audioExtensions)){
			$Subscription->setMediaType(0);
		}else{
			$Subscription->setMediaType(1);
		}
		$Subscription->setHomePage($data['homePage']);
		$Subscription->setMachineName($this->getUtilityService()->machinify($Subscription->getTitle()));
		$Subscription->setAutoDownload(false);
		// Use the current date/time for create and modified dates
		$dateAgo = new \DateTime;
		$currTimeInt = (strtotime($dateAgo->format('Y-m-d H:i:s'))) * 1000;
		$Subscription->setCreateDate($currTimeInt);
		$Subscription->setModifiedDate($currTimeInt);
		// Set public if working on DEV server
		// If adding subscription on PROD result will be false
		$configService = $this->getConfigService();
		$Subscription->setPublic($_SERVER['SERVER_NAME'] === $configService::DEV_SERVER_PATH);
		return $Subscription;
	}

	public function sync($sr, $er, $subscriptions)
	{

		$subscriptions = array_map('intval', explode(',', $subscriptions));

		$subscriptions = array_sum($subscriptions) < 1 ? $sr->findByPublic(true) : $sr->findById($subscriptions);

		$episodes = array_sum($subscriptions) < 1 ? $er->findByPublic(true) : $er->findBySubscription($subscriptions);
		return $this->getSyncArrays($subscriptions, $episodes);
	}

	public function getSubscriptionArray($subscription)
	{
		return array(
			'id' => $subscription->getId(),
			'title' => $subscription->getTitle(),
			'description' => $subscription->getDescription(),
			'src' => $subscription->getSrc(),
			'img' => $subscription->getImg(),
			'createDate' => $subscription->getCreateDate(),
			'modifiedDate' => $subscription->getModifiedDate(),
			'public' => $subscription->getPublic(),
			'mediaType' => $subscription->getMediaType(),
			'homePage' => $subscription->getHomePage(),
			'machineName' => $subscription->getMachineName()
		);
	}

}