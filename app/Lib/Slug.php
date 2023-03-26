<?php

namespace App\Lib;

use App\Models\Cartao;

class Slug {
    public static function generateSlugSuffix($nome) {
        $count = Cartao::whereRaw('LOWER(nome) = ?', strtolower($nome))->count();
        if ($count > 0) {
            return "$count";
        }
        return null;
    }
    
    public static function nameToSlug($nome) {
        return strtolower(join('_', explode(' ', $nome)));
    }

    public static function generateSlug($cartao) {
        $suffix = Slug::generateSlugSuffix($cartao->nome);
        return Slug::nameToSlug($cartao->nome).($suffix ? '_'.$suffix : '');
    }
}