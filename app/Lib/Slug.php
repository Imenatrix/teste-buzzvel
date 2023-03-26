<?php

namespace App\Lib;

use App\Models\Cartao;

class Slug {

    // Checa a existencia e faz a contagem dos cartões
    // Com o mesmo nome.
    public static function generateSlugSuffix($nome) {
        $count = Cartao::whereRaw('LOWER(nome) = ?', strtolower($nome))->count();
        if ($count > 0) {
            return "$count";
        }
        return null;
    }
    
    // Converte o nome para snake_case.
    public static function nameToSlug($nome) {
        return strtolower(join('_', explode(' ', $nome)));
    }

    // Gera um slug, ou mais especificamente um nome
    // Para ser utilizado na url da landing page.
    // O slug é baseado no nome do cartão, com letras
    // Minusculas e um sufixo numérico caso existam
    // Outros cartões com o mesmo nome.
    public static function generateSlug($nome) {
        $suffix = Slug::generateSlugSuffix($nome);
        return Slug::nameToSlug($nome).($suffix ? '_'.$suffix : '');
    }
}