<?php

namespace HC\Bundle\UtilityBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction($name)
    {
        return $this->render('HCUtilityBundle:Default:index.html.twig', array('name' => $name));
    }
}
