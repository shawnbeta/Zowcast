<?php
namespace HC\Bundle\MediaBundle\Services;
 use HC\Bundle\MediaBundle\Services\Parsers\SimplePieService;

class SimplePieServiceTest extends \PHPUnit_Framework_TestCase
{

    public function testConstruct()
    {
        $url = 'http://localhost/zowcast/rest/web/xml/test11.xml';
        $rawData = new SimplePieService($url);
        $this->assertEquals('HC\Bundle\MediaBundle\Services\Parsers\SimplePieService', get_class($rawData));
        return $rawData;
    }

    /**
     * @depends testConstruct
     */
    public function testMakeSubscriptionArray(SimplePieService $rawData)
    {
        $subscription = $rawData->getSubscriptionArray();
        $this->assertEquals('This Week in Tech (MP3)', $subscription['title']);
        $this->assertEquals('81kf7gnedDGD', $subscription['description']);
        $this->assertEquals('http://localhost/zowcast/rest/web/xml/2d5g7Dv2', $subscription['homePage']);
        $this->assertEquals('5d2gUF3', $subscription['img']);
    }

    /**
     * @depends testConstruct
     */
    public function testMakeEpisodeCollection(SimplePieService $rawData)
    {
        $lu = 1435546770000;
        $episodeCollection = $rawData->getEpisodeCollection($lu);
        $this->assertCount(2, $episodeCollection);
        $this->assertEquals('de5hbdhthdfg', $episodeCollection[0]['title']);
        $this->assertEquals('SSofj5DFH7d', $episodeCollection[0]['description']);
        $this->assertEquals('d9fk5m8', $episodeCollection[0]['src']);
//        var_dump($episodeCollection);
    }

}