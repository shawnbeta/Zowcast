<?php

namespace HC\Bundle\subscriptionBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use HC\Bundle\MediaBundle\Entity\BaseMediaEntity;
use Symfony\Component\HttpFoundation\Tests\StringableObject;

/**
 * Subscription
 *
 * @ORM\Table(name="subscriptions")
 * @ORM\Entity(repositoryClass="HC\Bundle\subscriptionBundle\Repositories\SubscriptionRepository")
 */
class Subscription extends BaseMediaEntity
{

    /**
     *
     * @ORM\Column(name="media_type", type="media_type")
     */
    private $mediaType;

    /**
     *
     * @ORM\Column(name="home_page", type="string")
     */
    private $homePage;

    /**
     *
     * @ORM\Column(name="machine_name", type="string")
     */
    private $machineName;

    /**
     *
     * @ORM\Column(name="auto_download", type="boolean")
     */
    private $autoDownload;

    /**
     *
     * @param integer $mediaType
     */
    public function setMediaType($mediaType)
    {
        $this->media_type = $mediaType;

        return $this;
    }

    /**
     *
     * @return integer
     */
    public function getMediaType()
    {
        return $this->mediaType;
    }

    /**
     *
     * @param integer $homePage
     */
    public function setHomePage($homePage)
    {
        $this->homePage = $homePage;

        return $this;
    }

    /**
     *
     * @return string
     */
    public function getHomePage()
    {
        return $this->homePage;
    }

    /**
     *
     * @return string
     */
    public function getMachineName()
    {
        return $this->machineName;
    }

    /**
     *
     * @param string $machineName
     */
    public function setMachineName($machineName)
    {
        $this->machineName = $machineName;

        return $this;
    }


    /**
     * Set autoDownload
     *
     * @param boolean $autoDownload
     * @return Subscription
     */
    public function setAutoDownload($autoDownload)
    {
        $this->autoDownload = $autoDownload;

        return $this;
    }

    /**
     * Get autoDownload
     *
     * @return boolean
     */
    public function getAutoDownload()
    {
        return $this->autoDownload;
    }
}
