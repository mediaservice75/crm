<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreLpr;
use App\Models\LprClient;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class LprController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
//        return view('lpr.create');
    }

    public function createLpr($client_id) {

        $lprs = LprClient::where('client_id', $client_id)->get();
        return view('lpr.create', compact('client_id', 'lprs'));
    }

    public function storeLpr($client_id, StoreLpr $request) {

        DB::beginTransaction();
        try {

            if ($request->date_of_birth) {
                $date = Carbon::createFromFormat('d.m.Y', $request->date_of_birth)->format('Y-m-d');
                $request->merge(['date_of_birth' => $date]);
            }
            $request->merge(['client_id' => $client_id]);
            $lpr = LprClient::create($request->all());
            DB::commit();
            $request->session()->flash('success', 'Данные успешно добавлены 👍');
            return back();
        } catch (\Exception $exception) {
            DB::rollback();

            $request->session()->flash('error', 'При добавлении данных произошла ошибка 😢'. $exception);
            return back();
        }
//        return view('lpr.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $lpr = LprClient::firstWhere('id', $id);
        return view('lpr.edit', compact('lpr'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
//        dd($request);
        $lpr = LprClient::firstWhere('id', $id);
        if ($request->date_of_birth) {

            $date = Carbon::createFromFormat('d.m.Y', $request->date_of_birth)->format('Y-m-d');
            $request->merge(['date_of_birth' => $date]);
        } else if ($request->date_of_birth == null) {

            $request->merge(['date_of_birth']);
            $lpr->date_of_birth = null;
            $lpr->save();
        }

        $lpr->update($request->all());
        return redirect()->back()->with('success', 'Данные успешно обновлены 👍');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $lpr = LprClient::find($id);
        $lpr->delete();
        return redirect()->back()->with('success', 'Данные успешно удалены 👍');
    }
}
