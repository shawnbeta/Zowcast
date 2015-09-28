<?php

namespace HC\Bundle\AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;

class AppController extends Controller
{

    public function homeAction()
    {
    	return new Response(
            '<html><body>Lucky number: </body></html>'
        );

    }
}
