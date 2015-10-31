<?php

namespace HC\Bundle\CoreBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;

class CoreController extends Controller
{

    public function homeAction()
    {
    	$test = $this->get('episode_service');
    	return new Response('sfds');

    }

    
}
