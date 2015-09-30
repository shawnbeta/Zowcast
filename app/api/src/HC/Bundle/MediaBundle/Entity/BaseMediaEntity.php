<?php

namespace HC\Bundle\MediaBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\MappedSuperclass;

/** @MappedSuperclass */

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
     * @var BigIntType
     *
     * @ORM\Column(name="modified_date", type="bigint")
     */
    private $modifiedDate;

    /**
     *
     * @ORM\Column(name="public", type="boolean")
     */
    private $public;


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
     * Set title
     *
     * @param string $title
     *
     * @return BaseMediaEntity
     */
    public function setTitle($title)
    {
        $this->title = $title;

        return $this;
    }

    /**
     * Get title
     *
     * @return string
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * Set description
     *
     * @param string $description
     *
     * @return BaseMediaEntity
     */
    public function setDescription($description)
    {
        $this->description = $description;

        return $this;
    }

    /**
     * Get description
     *
     * @return string
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Set src
     *
     * @param string $src
     *
     * @return BaseMediaEntity
     */
    public function setSrc($src)
    {
        $this->src = $src;

        return $this;
    }

    /**
     * Get src
     *
     * @return string
     */
    public function getSrc()
    {
        return $this->src;
    }

    /**
     * Set img
     *
     * @param string $img
     *
     * @return BaseMediaEntity
     */
    public function setImg($img)
    {
        $this->img = $img;

        return $this;
    }

    /**
     * Get img
     *
     * @return string
     */
    public function getImg()
    {
        return $this->img;
    }

    /**
     * Set createDate
     *
     * @param integer $createDate
     *
     * @return BaseMediaEntity
     */
    public function setCreateDate($createDate)
    {
        $this->createDate = $createDate;

        return $this;
    }

    /**
     * Get createDate
     *
     * @return integer
     */
    public function getCreateDate()
    {
        return $this->createDate;
    }

    /**
     * Set public
     *
     * @param boolean $public
     *
     * @return BaseMediaEntity
     */
    public function setPublic($public)
    {
        $this->public = $public;

        return $this;
    }

    /**
     * Get public
     *
     * @return boolean
     */
    public function getPublic()
    {
        return $this->public;
    }

    /**
     * Set modifiedDate
     *
     * @param integer $modifiedDate
     *
     * @return BaseMediaEntity
     */
    public function setModifiedDate($modifiedDate)
    {
        $this->modifiedDate = $modifiedDate;

        return $this;
    }

    /**
     * Get modifiedDate
     *
     * @return integer
     */
    public function getModifiedDate()
    {
        return $this->modifiedDate;
    }
}
