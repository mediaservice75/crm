<?php

namespace App\Http\Controllers;

use App\Models\Claim;
use App\Models\HistoryPayment;
use App\Models\StatusPayment;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class PaymentController extends Controller
{
    public function index() {

        if (Auth::user()->role->level <= 2 || Auth::user()->role->level == 5 || auth()->user()->userInvoice != 0) {

            $claims = Claim::with('historiesPayment.status')
                ->whereDoesntHave('historiesPayment.status', function ($q) {
                    $q->where('name', "Оплачен");
                })
                ->where('notInclude',0)
                ->orderBy('created_at', 'desc')
                ->get();


            session(['previous_url' => url()->current()]);
            $statusesPayment = StatusPayment::all();

            return view('payment.index', compact('claims', 'statusesPayment'));
        } else {
            abort(403);
        }
    }

    public function storeStatus(Request $request) {

        if ($request->created_at == null) {
            $request->merge([
                'created_at' => Carbon::now()->format('Y-m-d H:i:s')
            ]);
        } else {
            $request->merge([
                'created_at' => Carbon::createFromDate($request->created_at)->format('Y-m-d H:i:s')
            ]);
        }

        $claim = Claim::find($request->claim_id);

        if ($request->amount == null) {
            $amount = 0;
            $status = StatusPayment::where('id', $request->status_id)->get();
            if ($status->first()->name == 'Оплачен') {
                $sum = getPaymentsClaim($request->claim_id);
                $amount = $claim->amount - $sum;
            }

        } else {
            $amount = str_replace(' ', '', $request->amount);
            $sum = getPaymentsClaim($request->claim_id);
            if ($claim->amount == ($sum + $amount)) {

                $status = StatusPayment::where("name", 'Оплачен')->get();
                $request->merge([
                    'status_id' => $status->first()->id,
                    'amount' => $amount,
                    'user_id' => Auth::user()->id,
                ]);
                HistoryPayment::create($request->all());
                return redirect()->back()->with('success', 'Данные успешно обновлены 👍');

            }

        }

        $request->merge([
            'amount' => $amount
        ]);


        $validatedData = $request->validate(
            [
                'status_id' => 'required|integer',
            ],
            [
                'status_id.required' => 'Выберите значение из списка',
                'status_id.integer' => 'Выберите значение из списка',
            ]
        );

        DB::beginTransaction();

        try {
            $request->merge([
                'user_id' => Auth::user()->id,
            ]);

            HistoryPayment::create($request->all());

            DB::commit();

            return redirect()->back()->with('success', 'Данные успешно обновлены 👍');
        } catch (\Exception $exception) {
            DB::rollback();
            $request->session()->flash('error', 'При обновлении статуса оплаты произошла ошибка 😢');
            return back();
        }
    }

    public function paid() {

        $claims = Claim::with('historiesPayment.status')
            ->whereHas('historiesPayment.status', function ($q) {
                $q->where('name', "Оплачен");
            })
            ->where('notInclude',0)
            ->orderBy('created_at', 'desc')
            ->get();

        session(['previous_url' => url()->current()]);
        $statusesPayment = StatusPayment::all();

        return view('payment.paid', compact('claims', 'statusesPayment'));
    }

    public function paidListClaims($id) {

        $historiesPaidClaims = HistoryPayment::where('claim_id', $id)
            ->orderBy('created_at', 'desc')
            ->get();

        session(['previous_url' => url()->current()]);

        return view('payment.paid-claims', compact('historiesPaidClaims'));
    }

    public function deletePaidClaims($id) {
        $hp = HistoryPayment::find($id);
        $hp->delete();
        return redirect()->back()->with('success', 'Данные успешно удалены 👍');
    }
}
