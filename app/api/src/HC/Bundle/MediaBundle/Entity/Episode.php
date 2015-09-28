<?php

namespace HC\Bundle\MediaBundle\Entity;


use Doctrine\ORM\Mapping as ORM;

/**
 * Episode
 *
 * @ORM\Table(name="episodes")
 * @ORM\Entity(repositoryClass="HC\Bundle\MediaBundle\Repository\EpisodeRepository")
 */
class Episode extends BaseMediaEntity
{

    /**
     * @ORM\ManyToOne(targetEntity="Subscription", inversedBy="episodes")
     * @ORM\JoinColumn(name="subscription_id", referencedColumnName="id")
     */
    private $subscription;


    /**
     *
     * @ORM\Column(name="pub_date", type="bigint")
     */
    private $pubDate;


    /**
     *
     * @ORM\Column(name="duration", type="bigint")
     */
    private $duration;


    /**
     *
     * @ORM\Column(name="watched", type="boolean")
     */
    private $watched;

    /**
     *
     * @ORM\Column(name="bookmark", type="decimal")
     */
    private $bookmark;

    /**
     *
     * @param float $bookmark
     */
    public function setBookmark($bookmark)
    {
        $this->watched = $bookmark;
        return $this;
    }

    /**
     *
     * @return float
     */
    public function getBookmark()
    {
        return $this->bookmark;
    }

    /**
     *
     * @param boolean $watched
     */
    public function setWatched($watched)
    {
        $this->watched = $watched;
        return $this;
    }

    /**
     *
     * @return boolean
     */
    public function getWatched()
    {
        return $this->watched;
    }

    /**
     *
     * @param integer $duration
     */
    public function setDuration($duration)
    {
        $this->duration = $duration;
        return $this;
    }

    /**
     *
     * @return integer
     */
    public function getDuration()
    {
        return $this->duration;
    }






    /**
     *
     * @param integer $pubDate
     */
    public function setPubDate($pubDate)
    {
        $this->pubDate = $pubDate;

        return $this;
    }

    /**
     *
     * @return integer
     */
    public function getPubDate()
    {
        return $this->pubDate;
    }


    /**
     * Set subscription
     *
     * @param \HC\Bundle\MediaBundle\Entity\Subscription $subscription
     * @return Episode
     */
    public function setMedia(\HC\Bundle\MediaBundle\Entity\Subscription $subscription = null)
    {
        $this->subscription = $subscription;
        return $this;
    }

    /**
     * Get subscription
     *
     * @return \HC\Bundle\MediaBundle\Entity\Subscription
     */
    public function getSubscription()
    {
        return $this->subscription;
    }

    public function setUserData($userData)
    {
        $this->userData = $userData;

        return $this;
    }

    public function getUserData()
    {
        return $this->userData;
    }

}
