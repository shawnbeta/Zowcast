<?php
namespace HC\Bundle\MediaBundle\Services;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

class EpisodeRepositoryTest extends KernelTestCase
{
/**
* @var \Doctrine\ORM\EntityManager
*/
private $em;

/**
* {@inheritDoc}
*/
public function setUp()
{
self::bootKernel();
$this->em = static::$kernel->getContainer()
->get('doctrine')
->getManager()
;
}

public function testSearchByCategoryName()
{
$products = $this->em
->getRepository('AppBundle:Product')
->searchByCategoryName('foo')
;

$this->assertCount(1, $products);
}

/**
* {@inheritDoc}
*/
protected function tearDown()
{
parent::tearDown();
$this->em->close();
}
}