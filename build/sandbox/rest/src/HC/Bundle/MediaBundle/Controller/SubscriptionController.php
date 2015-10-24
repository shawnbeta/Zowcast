<?php

namespace HC\Bundle\MediaBundle\Controller;
use HC\Bundle\CoreBundle\Services\ConfigService;
use HC\Bundle\MediaBundle\Services\EpisodeService;
use HC\Bundle\MediaBundle\Services\SubscriptionService;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;

class SubscriptionController extends Controller
{

    public function addAction()
    {
        $request = Request::createFromGlobals();
        $src = urldecode($request->request->get('src'));
        $em = $this->getDoctrine()->getManager();
        $rsp = $this->get('subscription_service')->add($em, $src);
        return new Response(json_encode($rsp));
    }

    public function syncAction()
    {
        $request = Request::createFromGlobals();
        $syncedSubscriptions = urldecode($request->request->get('syncedSubscriptions'));
        $sr = $this->getDoctrine()->getRepository('HCMediaBundle:Subscription');
        $er = $this->getDoctrine()->getRepository('HCMediaBundle:Episode');
        $episodeService = new EpisodeService();
        $configService = $this->get('config_service');
        $dateAgo = $this->get('utility_service')->getDateAgo($configService::EPISODE_DAY_MAX);
        $episodeService->deleteOldEpisodes($er, $dateAgo);
        $rsp = $this->get('subscription_service')->sync($sr, $er, $syncedSubscriptions);
        return new Response(json_encode($rsp));
    }

    public function refreshAction($key)
    {
        $configService = $this->get('config_service');
        if($key !== $configService::ADMIN_KEY)
            return new Response(json_encode(array("success" => false)));
        $em = $this->getDoctrine()->getManager();
        $er = $this->getDoctrine()->getRepository('HCMediaBundle:Episode');
        $this->get('episode_service')
            ->deleteOldEpisodes($er, $configService::EPISODE_DAY_MAX);
        $newEpisodeCount = $this->get('episode_service')
            ->gatherNewEpisodes($this->getDoctrine()->getRepository('HCMediaBundle:Subscription'), $em);
        if($newEpisodeCount['success']){
            $rsp = array("success" => true);
        }else{
            $rsp = array("success" => false);
        }

        return new Response(json_encode($rsp));
    }

    public function updateAction($id)
    {
        $episodeRepo = $this->getDoctrine()->getRepository('HCMediaBundle:Episode');
        return $this->get('subscription_service')->add($id);
    }

    public function deleteAction($id)
    {
        $episodeRepo = $this->getDoctrine()->getRepository('HCMediaBundle:Episode');
        return $this->get('subscription_service')->delete($id);
    }
}
