<?php

namespace HC\Bundle\MediaBundle\DataFixtures\ORM;


use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Doctrine\Common\Persistence\ObjectManager;

use HC\Bundle\MediaBundle\Entity\Subscription;

class LoadSubscriptionData extends AbstractFixture implements OrderedFixtureInterface
{

    /**
     * {@inheritDoc}
     */
    public function load(ObjectManager $om)
    {
        $subscription = new Subscription();
        $subscription->setTitle('test');
        $subscription->setDescription('Description Text');
        $subscription->setSrc('http://shawnbeta.com');
        $subscription->setImg('http://frizzmop.com/img/molly.png');
        $subscription->setCreateDate(6025755342);
        $subscription->setMediaType('youtube');
        $subscription->setHomePage('http://shawnbeta.com');
        $subscription->setMachineName('test_subscription');
        $subscription->setAutoDownload(0);


        $om->persist($subscription);
        $om->flush();

        $this->addReference('subscription', $subscription);
    }
    /**
     * {@inheritDoc}
     */
    public function getOrder()
    {
        return 1; // the order in which fixtures will be loaded
    }


}