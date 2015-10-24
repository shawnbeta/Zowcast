<?php

namespace HC\Bundle\MediaBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;

/**
 * Subscription
 *
 * @ORM\Table(name="subscriptions")
 * @ORM\Entity(repositoryClass="HC\Bundle\MediaBundle\Repository\SubscriptionRepository")
 */
class Subscription extends MediaEntity
{

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


//    public function __construct()
//    {
//        $this->episodes = new ArrayCollection();
//    }


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
