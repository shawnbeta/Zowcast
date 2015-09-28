<?php

namespace HC\Bundle\MediaBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Episode
 *
 * @ORM\Table(name="hc_episodes")
 * @ORM\Entity(repositoryClass="HC\Bundle\MediaBundle\Repository\EpisodeRepository")
 */
class BaseMediaEntity
{

    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="title", type="string", length=60)
     */
    private $title;

    /**
     * @var string
     *
     * @ORM\Column(name="description", type="text", nullable=true)
     */
    private $description;

    /**
     * @var string
     *
     * @ORM\Column(name="src", type="text")
     */
    private $src;

    /**
     * @var string
     *
     * @ORM\Column(name="img", type="text")
     */
    private $img;

    /**
     * @var BigIntType
     *
     * @ORM\Column(name="create_date", type="bigint")
     */
    private $createDate;

    /**
     * Get id
     *
     * @return integer
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     *
     * @param string $title
     */
    public function setTitle($title)
    {
        $this->title = $title;
        return $this;
    }

    /**
     *
     * @return string
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     *
     * @param string $img
     */
    public function setImg($img)
    {
        $this->img = $img;
        return $this;
    }

    /**
     *
     * @return string
     */
    public function getImg()
    {
        return $this->img;
    }

    /**
     *
     * @param string $description
     */
    public function setDescription($description)
    {
        $this->description = $description;
        return $this;
    }

    /**
     *
     * @return string
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     *
     * @param string $src
     */
    public function setSrc($src)
    {
        $this->src = $src;
        return $this;
    }

    /**
     *
     * @return string
     */
    public function getSrc()
    {
        return $this->src;
    }

    /**
     *
     * @param integer $date
     */
    public function setCreateDate($date)
    {
        $this->createDate = $date;
        return $this;
    }

    /**
     *
     * @return integer
     */
    public function getCreateDate()
    {
        return $this->createDate;
    }

}
