<?php

namespace HC\Bundle\VendorBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction($name)
    {
        return $this->render('HCVendorBundle:Default:index.html.twig', array('name' => $name));
    }
}
