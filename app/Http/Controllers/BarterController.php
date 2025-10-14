<?php

namespace App\Http\Controllers;

use App\Models\Claim;
use Illuminate\Http\Request;

class BarterController extends Controller
{
    public function index()
    {
        $barterClaims = Claim::where('isBarter', true)->get();
        // dd($barterClaims);
        return view('barter.index', compact('barterClaims'));
    }
}
