<?php

namespace Tests\Feature;

use App\Lib\Slug;
use App\Models\Cartao;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class SlugTest extends TestCase
{
    public function test_can_convert_name_to_slug(): void
    {
        $result = Slug::nameToSlug('Imena Gomes do Rosario');
        $this->assertEquals('imena_gomes_do_rosario', $result);
    }

    public function test_can_count_repeated_names(): void
    {
        Cartao::factory()->create(['nome' => 'Pedro Silva']);
        $result = Slug::generateSlugSuffix('Pedro Silva');
        $this->assertEquals('1', $result);
    }

    public function test_can_create_slug(): void
    {
        $cartao = new Cartao;
        $cartao->nome = 'Gabriel Crisanto';
        $result = Slug::generateSlug($cartao);
        $this->assertEquals('gabriel_crisanto', $result);
    }

    public function test_can_create_slug_with_suffix(): void
    {
        Cartao::factory()->create(['nome' => 'Rafael Silva', 'slug' => 'rafael_silva']);
        Cartao::factory()->create(['nome' => 'Rafael Silva', 'slug' => 'rafael_silva_1']);
        $cartao = Cartao::factory()->make(['nome' => 'Rafael Silva']);
        $result = Slug::generateSlug($cartao);
        $this->assertEquals('rafael_silva_2', $result);
    }
}
