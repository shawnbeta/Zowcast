<?php

namespace HC\Bundle\MediaBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Subscription
 *
 * @ORM\Table(name="subscriptions")
 * @ORM\Entity(repositoryClass="HC\Bundle\MediaBundle\Repositories\SubscriptionRepository")
 */
class Subscription extends BaseMediaEntity
{

    /**
     *
     * @ORM\Column(name="media_type", type="integer")
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
     * Set mediaType
     *
     * @param integer $mediaType
     *
     * @return Subscription
     */
    public function setMediaType($mediaType)
    {
        $this->mediaType = $mediaType;

        return $this;
    }

    /**
     * Get mediaType
     *
     * @return integer
     */
    public function getMediaType()
    {
        return $this->mediaType;
    }

    /**
     * Set homePage
     *
     * @param string $homePage
     *
     * @return Subscription
     */
    public function setHomePage($homePage)
    {
        $this->homePage = $homePage;

        return $this;
    }

    /**
     * Get homePage
     *
     * @return string
     */
    public function getHomePage()
    {
        return $this->homePage;
    }

    /**
     * Set machineName
     *
     * @param string $machineName
     *
     * @return Subscription
     */
    public function setMachineName($machineName)
    {
        $this->machineName = $machineName;

        return $this;
    }

    /**
     * Get machineName
     *
     * @return string
     */
    public function getMachineName()
    {
        return $this->machineName;
    }

    /**
     * Set autoDownload
     *
     * @param boolean $autoDownload
     *
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
