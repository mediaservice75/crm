<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreGroups;
use App\Models\StatusPayment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class StatusPaymentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $statusPayment = StatusPayment::where('isVisible', '=', 1)->get();
        return view('statusesPayment.index', compact('statusPayment'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('statusesPayment.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreGroups $request)
    {
        DB::beginTransaction();
        try {
            StatusPayment::create($request->all());
            DB::commit();
            $request->session()->flash('success', 'Данные успешно добавлены 👍');
            return back();
        } catch (\Exception $exception) {
            DB::rollback();

            $request->session()->flash('error', 'При добавлении данных произошла ошибка 😢');
            return back();
        }
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
        $statusPayment = StatusPayment::firstWhere('id', $id);
        return view('statusesPayment.edit', compact('statusPayment'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(StoreGroups $request, $id)
    {
        $statusPayment = StatusPayment::firstWhere('id', $id);
        $statusPayment->update($request->all());
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
        $statusPayment = StatusPayment::find($id);
        $statusPayment->delete();
        return redirect()->back()->with('success', 'Данные успешно удалены 👍');
    }
}
