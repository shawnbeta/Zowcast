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
        return $onlyFive;
    }

    /**
     * @depends testSetEpisodeCount
     */
    public function testFetchBySubscription(array $onlyFive)
    {
        // Get the ID of the first subscription in the collection of five
        $subId = $onlyFive[0]->getSubscription()->getId();
        $subFiltered = $this->episodeRepo->fetchEpisodes(0, 2, $subId);
        $this->assertEquals($subFiltered[0]->getSubscription()->getId(), $subId);
    }

    public function testGetEpisodeByDate()
    {
        // For Date filter
        $dateFilter = array('symbol' => '>', 'value' => 9282661087);
        $dateFiltered = $this->episodeRepo->fetchEpisodes(0, 2, NULL, $dateFilter);
//        $this->assertGreaterThan(1, $dateFiltered);
    }

}