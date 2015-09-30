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


}