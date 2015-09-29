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
        $subscriptionCollection = array();
        for($i=0;$i<2;$i++) {
            $subscription = 'subscription' . $i;
            $$subscription = new Subscription();
            $$subscription->setTitle($i . 'test');
            $$subscription->setDescription($i . 'Description Text');
            $$subscription->setSrc($i . 'http://shawnbeta.com');
            $$subscription->setImg($i . 'http://frizzmop.com/img/molly.png');
            $$subscription->setCreateDate($i . 6025755342);
            $$subscription->setMediaType($i . 'youtube');
            $$subscription->setHomePage($i . 'http://shawnbeta.com');
            $$subscription->setMachineName($i . 'test_subscription');
            $$subscription->setAutoDownload(0);

            $om->persist($$subscription);

            array_push($subscriptionCollection, $$subscription);

        }
        $om->flush();
        for($i=0;$i<2;$i++) {
            $this->addReference('subscription' . $i, $subscriptionCollection[$i]);
        }

    }
    /**
     * {@inheritDoc}
     */
    public function getOrder()
    {
        return 1; // the order in which fixtures will be loaded
    }


}