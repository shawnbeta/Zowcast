<?php

namespace HC\Bundle\MediaBundle\Controller;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;


class EpisodeController extends Controller
{

    public function fetchEpisodes($pageNumber)
    {
        $episodeRepo = $this->getDoctrine()->getRepository('HCMediaBundle:Episode');

        $episodeService = $this->get('episode_service');

        $episodeService->fetchEpisodes($episodeRepo, $pageNumber);









    }

}