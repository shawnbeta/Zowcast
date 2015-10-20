<?php

namespace HC\Bundle\MediaBundle\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class SubscriptionController extends Controller
{

    public function addAction()
    {

        $ss = $this->get('subscription_service');
        return $ss->add();

    }
}
