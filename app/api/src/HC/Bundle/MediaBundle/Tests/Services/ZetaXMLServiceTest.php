<?php
namespace HC\Bundle\MediaBundle\Services;
 use HC\Bundle\MediaBundle\Services\Parsers\ZetaXMLService;

class ZetaXMLServiceTest extends \PHPUnit_Framework_TestCase
{

    public function testConstruct()
    {
        $src = 'http://localhost/zowcast/app/xml/test11.xml';
        $zetaServiceObj = new ZetaXMLService($src);
        $this->assertEquals('HC\Bundle\MediaBundle\Services\Parsers\ZetaXMLService', get_class($zetaServiceObj));
        return $zetaServiceObj;
    }

    /**
     * @depends testConstruct
     */
    public function testMakeSubscriptionArray(ZetaXMLService $zetaServiceObj)
    {
        $subscription = $zetaServiceObj->makeSubscriptionArray();
        var_dump($subscription);
        $this->assertEquals('This Week in Tech (MP3)', $subscription['title']);
        $this->assertEquals('81kf7gnedDGD', $subscription['description']);
        $this->assertEquals('2d5g7Dv2', $subscription['homePage']);
        $this->assertEquals('d5vD2ggER', $subscription['img']);
    }

    /**
     * @depends testConstruct
     */
    public function testMakeEpisodeCollection(ZetaXMLService $zetaServiceObj)
    {
        $lu = 1435546770000;
        $episodeCollection = $zetaServiceObj->makeEpisodeCollection($lu);
        $this->assertEquals(2, count($episodeCollection));
        $this->assertEquals('de5hbde', $episodeCollection[0]['title']);
        $this->assertEquals('SSofj5DFH7d', $episodeCollection[0]['description']);
        $this->assertEquals('l56kf86ld25f', $episodeCollection[0]['src']);
        var_dump($episodeCollection);
    }

}