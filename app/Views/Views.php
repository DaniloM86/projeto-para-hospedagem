<?php

namespace App\Views;

class Views{
    private static function getContentView($view)
    {
        $file = __DIR__.'/../../public/views/'.$view.'.html';
        return file_exists($file) ? file_get_contents($file) :'erro: 404 not found';
    }
    public static function render($view)
    {
        $contentView = self::getContentView($view);
        return $contentView;
    }
}