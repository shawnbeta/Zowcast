<?php

namespace HC\Bundle\MediaBundle\Controller;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;

class EpisodeController extends Controller
{

    public function updateAction()
    {
        $request = Request::createFromGlobals();
        $field = urldecode($request->request->get('field'));
        $value = urldecode($request->request->get('value'));
        $id = urldecode($request->request->get('id'));
        $em = $this->getDoctrine()->getManager();
        $episode = $this->getDoctrine()->getManager()->getRepository('HCMediaBundle:Episode')->find($id);
        $rsp = $this->get('episode_service')->updateEpisode($em, $episode, $field, $value);
        return new Response(json_encode($rsp));
    }


//    public function fetchEpisodes($pageNumber)
//    {
//        $episodeRepo = $this->getDoctrine()->getRepository('HCMediaBundle:Episode');
//
//        $episodeService = $this->get('episode_service');
//
//        $episodeService->fetchEpisodes($episodeRepo, $pageNumber);
//
//    }

}