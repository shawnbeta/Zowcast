<?php
namespace HC\Bundle\UtilityBundle\Services;

class UtilityServiceTest extends \PHPUnit_Framework_TestCase
{

    protected $utilityService;

    protected function setUp()
    {
        $this->utilityService = new UtilityService();
    }

    public function testMachinify()
    {
        $textString = 'TEST !!!@34asf@dcDFKV';
        $output = $this->utilityService->machinify($textString);
        $this->assertEquals('test-34asfdcdfkv', $output);
    }



}

