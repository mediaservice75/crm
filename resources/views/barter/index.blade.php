@extends('layout.layout')

@section('page-heading')
    Бартер
@endsection

@section('content')
    <div class="bg-white p-4 rounded-4">
        <table class="table table-borderless fixed-layout table-striped table-hover">
            <colgroup>
                <col style="">
                <col style="">
                <col style="">
                <col style="">
                <col style="">
                <col style="">
                <col style="">
                <col style="">
            </colgroup>
            <thead>
                <tr class="text-muted border-bottom">
                    <th class="fw-normal small">Дата заявки</th>
                    <th class="fw-normal small">Номер заявки</th>
                    <th class="fw-normal small">Компания</th>
                    <th class="fw-normal small">Менеджер</th>
                    <th class="fw-normal small">Услуга</th>
                    <th class="fw-normal small">Номер счёта</th>
                    <th class="fw-normal small text-end">Сумма счёта</th>
                    <th class="fw-normal small text-end">Оплачено</th>
                    <th class="fw-normal small">Статус</th>
                    <th class="fw-normal small text-end">Остаток</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($barterClaims as $claim)
                    <tr class="border-bottom">
                        <td>{{ $claim->created_at->format('d.m.y') }}</td>
                        <td>
                            <a href="{{ route('claims.show', $claim->id) }}" class="text-decoration-none">
                                {{ $claim->id }}
                            </a>
                        </td>
                        <td>
                            <a
                                href="{{ route('clients.show', ['client' => $claim->client_id]) }}">{{ $claim->client->name }}</a>
                        </td>
                        <td>
                            <a href="{{ route('users.show', ['user' => $claim->creator]) }}">{{ $claim->creatorUser->getFullName() }}</a>
                        </td>
                        <td class="text-truncate" title="{{ $claim->service->name ?? '-' }}">
                            {{ $claim->service->name ?? '-' }}
                        </td>
                        <td>
                            <a href="{{ url('/payments/paid/' . $claim->id) }}">
                                {{ $claim->number_invoice }}
                            </a>
                        </td>
                        <td class="text-end">{{ rtrim(rtrim(money($claim->amount)), '0') }} ₽
                        </td>
                        <td class="text-end">
                            @if ($claim['paid'] > 0)
                                {{ rtrim(rtrim(money($claim['paid'])), '0') }} ₽
                            @else
                                -
                            @endif
                        </td>
                        <td>
                            @if ($claim->historiesPayment->isNotEmpty())
                                <span class="badge custom-bg-{{ $claim->historiesPayment->first()->status->color }}">
                                    {{ $claim->historiesPayment->first()->status->name }}
                                </span>
                            @else
                                <span class="text-muted">-</span>
                            @endif
                        </td>
                        <td class="text-end {{ $claim['remaining'] > 0 ? 'text-danger' : '' }}">
                            @if ($claim['remaining'] > 0)
                                {{ rtrim(rtrim(money($claim['remaining'])), '0') }} ₽
                            @else
                                -
                            @endif
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>
@endsection
