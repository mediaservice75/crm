<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreGroups;
use App\Models\Category;
use App\Models\Client;
use App\Notifications\GoalRemiderNotification;
use App\Notifications\RemindClient;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (Auth::user()->cannot('viewAny', Category::class)) {
            abort(403);
        }
        $categories = Category::all();
        return view('category.index', compact('categories'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        if (Auth::user()->cannot('create', Category::class)) {
            abort(403);
        }
        return view('category.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreGroups $request)
    {
        if (Auth::user()->cannot('create', Category::class)) {
            abort(403);
        }
        DB::beginTransaction();
        try {
            Category::create($request->all());
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
        abort(404);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $category = Category::firstWhere('id', $id);
        if (Auth::user()->cannot('update', $category)) {
            abort(403);
        }

        return view('category.edit', compact('category'));
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
        $category = Category::firstWhere('id', $id);
        if (Auth::user()->cannot('update', $category)) {
            abort(403);
        }
        $category->update($request->all());
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
        $category = Category::find($id);
        if (Auth::user()->cannot('delete', $category)) {
            abort(403);
        }
        $category->delete();
        return redirect()->back()->with('success', 'Данные успешно удалены 👍');
    }
}
