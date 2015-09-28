<?php

namespace HC\Bundle\MediaBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class MediaController extends Controller
{
    public function indexAction($name)
    {
        return $this->render('HCMediaBundle:Default:index.html.twig', array('name' => $name));
    }
}
