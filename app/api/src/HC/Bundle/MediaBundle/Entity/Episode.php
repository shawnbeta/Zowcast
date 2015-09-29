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
     * @ORM\ManyToOne(targetEntity="Subscription")
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
     * @ORM\Column(name="watched", type="boolean")
     */
    private $watched;

    /**
     *
     * @ORM\Column(name="bookmark", type="decimal")
     */
    private $bookmark;


    /**
     * Set pubDate
     *
     * @param integer $pubDate
     *
     * @return Episode
     */
    public function setPubDate($pubDate)
    {
        $this->pubDate = $pubDate;

        return $this;
    }

    /**
     * Get pubDate
     *
     * @return integer
     */
    public function getPubDate()
    {
        return $this->pubDate;
    }

    /**
     * Set watched
     *
     * @param boolean $watched
     *
     * @return Episode
     */
    public function setWatched($watched)
    {
        $this->watched = $watched;

        return $this;
    }

    /**
     * Get watched
     *
     * @return boolean
     */
    public function getWatched()
    {
        return $this->watched;
    }

    /**
     * Set bookmark
     *
     * @param string $bookmark
     *
     * @return Episode
     */
    public function setBookmark($bookmark)
    {
        $this->bookmark = $bookmark;

        return $this;
    }

    /**
     * Get bookmark
     *
     * @return string
     */
    public function getBookmark()
    {
        return $this->bookmark;
    }

    /**
     * Set subscription
     *
     * @param \HC\Bundle\MediaBundle\Entity\Subscription $subscription
     *
     * @return Episode
     */
    public function setSubscription(\HC\Bundle\MediaBundle\Entity\Subscription $subscription = null)
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
}
