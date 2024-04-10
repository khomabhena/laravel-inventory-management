<?php

namespace App\Http\Controllers;

use App\Models\Provider;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ProviderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = Provider::query()->orderBy('created_at', 'asc')->paginate();
        return json_encode($data);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return 'Create';
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = Provider::create($request->all());
        return $data;
    }

    /**
     * Display the specified resource.
     */
    public function show(Provider $provider)
    {
        if ($provider->user_id !== request()->user()->id) {
            abort(403);
        }

        return json_encode($provider);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Provider $provider)
    {
        return 'Edit';
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Provider $provider)
    {
        $data = $provider->update($request->all());
        return $data;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Provider $provider)
    {
        $provider->delete();
        return '200';
    }
}
