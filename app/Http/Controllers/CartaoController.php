<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCartaoRequest;
use App\Lib\Slug;
use App\Models\Cartao;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CartaoController extends Controller
{
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Cartao/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCartaoRequest $request)
    {
        $validated = $request->validated();
        $cartao = Cartao::create([...$validated, 'slug' => Slug::generateSlug($validated['nome'])]);
        return redirect()->route('cartao.show', ['cartao' => $cartao]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Cartao $cartao)
    {
        return Inertia::render('Cartao/Show', ['cartao' => $cartao]);
    }

    public function showLandingPage(Cartao $cartao) {
        return Inertia::render('Cartao/LandingPage', ['cartao' => $cartao]);
    }
}
