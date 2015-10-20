<?php

namespace HC\Bundle\AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;

class AppController extends Controller
{

    public function homeAction()
    {
    	$test = $this->get('episode_service');
    	$rsp = $test->go('fuck');
    	return new Response($rsp);

    }

    
}
