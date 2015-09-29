<?php
namespace HC\Bundle\MediaBundle\Services;
use HC\Bundle\MediaBundle\Services\Parsers\YoutubeService;
use HC\Bundle\AppBundle\Services\ConfigService;

class YoutubeServiceTest extends \PHPUnit_Framework_TestCase
{

    protected $stack;
    protected $src;
    protected $apiKey;
    protected $youtubeService;

    protected  function setUp()
    {
        $this->stack = array();
        $configService = new ConfigService();
        $this->src = $configService::YOUTUBE_TEST_SRC;
        $this->apiKey = $configService::YOUTUBE_KEY;
        $this->youtubeService = new YoutubeService($this->src, $this->apiKey);
    }

    public function testFetchChannelData()
    {
        $jsonRsp = $this->youtubeService->fetchChannelData($this->src, $this->apiKey);
        $this->assertEquals('youtube#channelListResponse', $jsonRsp->kind);
        return $jsonRsp;
    }

    public function testFetchEpisodeData()
    {
        $jsonRsp = $this->youtubeService->fetchEpisodeData($this->src, $this->apiKey);
        $this->assertEquals($this->src, $jsonRsp->items[0]->snippet->channelId);
        return $jsonRsp;
    }

    /**
     * @depends testFetchChannelData
     */
    public function testMakeSubscriptionArray($jsonRsp)
    {
        $rsp = $this->youtubeService->makeSubscriptionArray($jsonRsp);
        // Only checking the homePage src because other properties could be easier to change
        // since they won't affect subscriptions. I'm not sure about this but don't plan on digging
        // into the issue to much further unless there is an issue.
        $this->assertEquals($this->src, $rsp['homePage']);
        return $jsonRsp;
    }

    /**
     * @depends testFetchEpisodeData
     */
    public function testMakeEpisodeCollection($jsonRsp){
        $lu = 1435546770000;
        $rsp = $this->youtubeService->makeEpisodeCollection($jsonRsp, $lu);
        $this->assertFalse(empty($rsp));
    }

}