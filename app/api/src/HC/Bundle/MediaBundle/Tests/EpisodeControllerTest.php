<?php

namespace HC\Bundle\MediaBundle\Tests\Controller;

use Liip\FunctionalTestBundle\Test\WebTestCase;

class EpisodeControllerTest extends WebTestCase
{

    private $em;
    private $episodeRepo;

    public function setUp()
    {
        self::bootKernel();
        $this->em = static::$kernel->getContainer()->get('doctrine')->getManager();
        $fixtures = array(
            'HC\Bundle\MediaBundle\DataFixtures\ORM\LoadSubscriptionData',
            'HC\Bundle\MediaBundle\DataFixtures\ORM\LoadEpisodeData'
        );
        $this->fixtures = $this->loadFixtures($fixtures);
        $this->episodeRepo = $this->em->getRepository('HCMediaBundle:Episode');
    }

    public function testAdd()
    {
        // If loadFixtures fails in setup this test should fail.
        $episodesAll = $this->episodeRepo->fetchEpisodes();
        $this->assertGreaterThan(0, count($episodesAll));
    }

    public function testFetchAll()
    {
        $episodesAll = $this->episodeRepo->fetchEpisodes();
        $this->assertCount(20, $episodesAll);
    }

    public function testFetchCount()
    {
        $onlyFive = $this->episodeRepo->fetchEpisodes(0, 5);
        $this->assertCount(5, $onlyFive);
    }

    public function testFetchBySubscription()
    {
        // Get the ID of the first subscription in the collection of five
        $episodeArray = $this->episodeRepo->fetchEpisodes(0, 1);
        $subId = $episodeArray[0]->getSubscription()->getId();
        $subFiltered = $this->episodeRepo->fetchEpisodes(0, 2, $subId);
        $this->assertEquals($subFiltered[0]->getSubscription()->getId(), $subId);
    }

    public function testFetchByDate()
    {
        $dateFiltered = $this->episodeRepo->fetchByDate('modifiedDate', 9282661087, '<');
        var_dump($dateFiltered);
        $this->assertGreaterThan(9282661085, $dateFiltered[0]->getPubDate());
    }

    public function testUpdateBookmark()
    {
        $episodeArray = $this->episodeRepo->fetchEpisodes(0, 1);
        $episodeArray[0]->setBookmark(22.44);
        $this->em->flush();
        $episode = $this->episodeRepo->find($episodeArray[0]->getId());
        $this->assertEquals(22.44, $episode->getBookmark());
    }

    public function testUpdateWatched()
    {
        $episodeArray = $this->episodeRepo->fetchEpisodes(0, 1);
        $episodeArray[0]->setWatched(true);
        $this->em->flush();
        $episode = $this->episodeRepo->find($episodeArray[0]->getId());
        $this->assertTrue($episode->getWatched());
    }

}