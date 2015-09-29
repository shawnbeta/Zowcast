<?php

namespace HC\Bundle\MediaBundle\DataFixtures\ORM;

use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Doctrine\Common\Persistence\ObjectManager;

use HC\Bundle\AppBundle\Services\ConfigService;
use HC\Bundle\MediaBundle\Entity\Episode;

class LoadEpisodeData extends AbstractFixture implements OrderedFixtureInterface
{

    private $configService;



    /**
     * {@inheritDoc}
     */
    public function load(ObjectManager $om)
    {
        $cs = new ConfigService();
        $itemCount = $cs::TEST_ITEM_COUNT;
        $subID = 0;
        for($i=0;$i<$itemCount;$i++){
            $episode = 'episode' . $i;
            $$episode = new Episode();
            $$episode->setTitle($i . 'Episode Test');
            $$episode->setDescription($i . 'Description text goes here.');
            $$episode->setSrc($i . 'http://shawnbeta.com');
            $$episode->setImg($i . 'http://frizzmop.com/img/molly.png');
            $$episode->setCreateDate($i . 4404);

            $$episode->setPubDate(9282661086);
            $$episode->setWatched(1);
            $$episode->setBookmark(25.33);
            $subscriptionCollection = $this->getReference('subscription' . $subID);
            $$episode->setSubscription($subscriptionCollection);

            $om->persist($$episode);
            // Alternate the subscription ID's.
            $subID = $subID == 0 ? 1 : 0;
        }


        $om->flush();

    }
    /**
     * {@inheritDoc}
     */
    public function getOrder()
    {
        return 2; // the order in which fixtures will be loaded
    }


}