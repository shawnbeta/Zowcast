<?php

namespace HC\Bundle\UtilityBundle\Services;


class UtilityService
{

    public static function machinify($text)
    {
        $string = str_replace(' ', '-', $text); // Replaces all spaces with hyphens.
        $string2 = preg_replace('/[^A-Za-z0-9\-]/', '', $string);
        $rsp = strtolower($string2);
        return $rsp;
    }

    public function getDateAgo($episodeDayMax)
    {
        // Enforcing a 60 day limit on episodes
        $dateAgo = new \DateTime;
        $dateAgo->modify('-' . $episodeDayMax . ' days');
        return (strtotime($dateAgo->format('Y-m-d H:i:s'))) * 1000;
    }


}