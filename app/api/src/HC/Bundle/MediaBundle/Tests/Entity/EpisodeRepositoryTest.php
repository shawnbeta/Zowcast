<?php
namespace HC\Bundle\MediaBundle\Services;

use HC\Bundle\MediaBundle\DataFixtures\ORM\LoadSubscriptionData;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;
use Liip\FunctionalTestBundle\LiipFunctionalTestBundle;

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
        $this->em = static::$kernel->getContainer()->get('doctrine')->getManager();

    }

    public function testInsert()
    {
//        $subscriptionData = new LoadSubscriptionData();
//        $subscriptionData->load(Doctrine\Common\Persistence\ObjectManager);

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