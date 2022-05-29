<?php
namespace App\Controller;
use App\Views\Views;
class MasterPage{
    public static function getHome()
    {
        return Views::render('pages/masterPage');
    }
}