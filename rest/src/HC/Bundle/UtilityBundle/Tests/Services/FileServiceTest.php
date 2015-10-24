<?php
/**
 * Created by PhpStorm.
 * User: shawn
 * Date: 9/29/15
 * Time: 8:25 PM
 */

namespace HC\Bundle\UtilityBundle\Tests\Services;
use HC\Bundle\CoreBundle\Services\ConfigService;
use Symfony\Component\Filesystem\Filesystem;

class FileServiceTest extends \PHPUnit_Framework_TestCase
{
    protected $fileSystem;

    protected function setUp()
    {
        $this->fileSystem = new Filesystem();
    }

    public function testCopy()
    {
        $src = 'http://frizzmop.com/img/molly.png';
        $config_service = new ConfigService();
        $target = $config_service::FILES . 'molly.png';
        $this->fileSystem->copy($src, $target);
        $this->assertTrue($this->fileSystem->exists($target));
    }



}