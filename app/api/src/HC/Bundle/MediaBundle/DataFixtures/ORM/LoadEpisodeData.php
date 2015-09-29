<?php

namespace HC\Bundle\MediaBundle\DataFixtures\ORM;

use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Doctrine\Common\Persistence\ObjectManager;

use HC\Bundle\MediaBundle\Entity\Episode;

class LoadEpisodeData extends AbstractFixture implements OrderedFixtureInterface
{

    /**
     * {@inheritDoc}
     */
    public function load(ObjectManager $om)
    {
        $episode = new Episode();
        $episode->setTitle('Episode Test');
        $episode->setDescription('Description text goes here.');
        $episode->setSrc('http://shawnbeta.com');
        $episode->setImg('http://frizzmop.com/img/molly.png');
        $episode->setCreateDate(4404);

        $episode->setPubDate(9282661086);
        $episode->setWatched(1);
        $episode->setBookmark(25.33);
        $episode->setSubscription($this->getReference('subscription'));


        $om->persist($episode);
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