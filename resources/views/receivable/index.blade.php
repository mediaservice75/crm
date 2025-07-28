@extends('layout.layout')

@section('page-heading')
    Дебиторская задолженность по менеджерам
@endsection

@section('content')
    <div class="debt-list bg-white p-4 rounded-4">
        {{-- Блок общей статистики --}}
        <div class="global-stats mb-4 p-3 bg-light rounded-4">
            <div class="row">
                <div class="col-md-4">
                    <div class="stat-card text-center p-3 border-end">
                        <div class="stat-value display-6 fw-bold text-danger">
                            {{ rtrim(rtrim(money($totalDebt)), '0') }} ₽
                        </div>
                        <div class="stat-label small text-muted">Общая задолженность</div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="stat-card text-center p-3 border-end">
                        <div class="stat-value fs-4 fw-bold">
                            {{ $totalClientsWithDebt }}
                        </div>
                        <div class="stat-label small text-muted">Компаний с долгами</div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="stat-card text-center p-3">
                        <div class="stat-value fs-4 fw-bold">
                            {{ $totalClaims }}
                        </div>
                        <div class="stat-label small text-muted">Неоплаченных заявок</div>
                    </div>
                </div>
            </div>

            <div class="row mt-2">
                <div class="col-12 text-end">
                    <small class="text-muted">
                        Актуально на {{ now()->format('d.m.Y') }}
                    </small>
                </div>
            </div>
        </div>
        @php
            // Группируем данные: Менеджер -> Компания -> Заявки
            $managersData = [];
            foreach ($users as $user) {
                foreach ($user->claims as $claim) {
                    if ($claim->client) {
                        $managerId = $user->id;
                        $clientId = $claim->client->id;

                        if (!isset($managersData[$managerId])) {
                            $managersData[$managerId] = [
                                'manager' => $user,
                                'clients' => [],
                                'total' => 0,
                            ];
                        }

                        if (!isset($managersData[$managerId]['clients'][$clientId])) {
                            $managersData[$managerId]['clients'][$clientId] = [
                                'client' => $claim->client,
                                'claims' => [],
                                'total' => 0,
                            ];
                        }

                        $paid = getPaymentsClaim($claim->id);
                        $remaining = max(0, $claim->amount - $paid);

                        $managersData[$managerId]['clients'][$clientId]['claims'][] = [
                            'data' => $claim,
                            'paid' => $paid,
                            'remaining' => $remaining,
                        ];

                        $managersData[$managerId]['clients'][$clientId]['total'] += $remaining;
                        $managersData[$managerId]['total'] += $remaining;
                    }
                }
            }
        @endphp

        @foreach ($managersData as $managerData)
            <div class="manager-section mb-5">
                <div class="manager-header d-flex justify-content-between align-items-center mb-3 pb-2 border-bottom">
                    <h4 class="m-0">
                        {{ $managerData['manager']->name }} {{ $managerData['manager']->surname }}
                    </h4>
                    <div class="text-danger fw-medium">
                        {{ rtrim(rtrim(money($managerData['total']), '0')) }} ₽
                    </div>
                </div>

                @foreach ($managerData['clients'] as $clientData)
                    <div class="client-section mb-4">
                        <div
                            class="client-header d-flex justify-content-between align-items-center mb-2 pb-2 border-bottom">
                            <h5 class="m-0">
                                <a href="{{ route('clients.show', $clientData['client']->id) }}"
                                    class="text-decoration-none">
                                    {{ $clientData['client']->name }}
                                </a>
                                @if ($clientData['client']->requisite && $clientData['client']->requisite->fullName)
                                    <small class="text-muted ms-2">
                                        ({{ $clientData['client']->requisite->fullName }})
                                    </small>
                                @endif
                            </h5>
                            <div class="text-danger">
                                {{ rtrim(rtrim(money($clientData['total']), '0')) }} ₽
                            </div>
                        </div>

                        <div class="claims-list mt-2">
                            <table class="table table-borderless fixed-layout table-striped">
                                <colgroup>
                                    <col style=""> <!-- Дата заявки -->
                                    <col style=""> <!-- Номер заявки -->
                                    <col style=""> <!-- Услуга -->
                                    <col style=""> <!-- Номер счёта -->
                                    <col style=""> <!-- Сумма -->
                                    <col style=""> <!-- Оплачено -->
                                    <col style=""> <!-- Остаток -->
                                    <col style=""> <!-- Статус -->
                                </colgroup>
                                <thead>
                                    <tr class="text-muted border-bottom">
                                        <th class="fw-normal small">Дата заявки</th>
                                        <th class="fw-normal small">Номер заявки</th>
                                        <th class="fw-normal small">Услуга</th>
                                        <th class="fw-normal small">Номер счёта</th>
                                        <th class="fw-normal small text-end">Сумма счёта</th>
                                        <th class="fw-normal small text-end">Оплачено</th>
                                        <th class="fw-normal small">Статус</th>
                                        <th class="fw-normal small text-end">Остаток</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($clientData['claims'] as $claimItem)
                                        @php $claim = $claimItem['data'] @endphp
                                        <tr class="border-bottom">
                                            <td>{{ $claim->created_at->format('d.m.y') }}</td>
                                            <td>
                                                <a href="{{ route('claims.show', $claim->id) }}"
                                                    class="text-decoration-none">
                                                    {{ $claim->id }}
                                                </a>
                                            </td>
                                            <td class="text-truncate" title="{{ $claim->service->name ?? '-' }}">
                                                {{ $claim->service->name ?? '-' }}
                                            </td>
                                            <td>
                                                <a href="{{ url('/payments/paid/' . $claim->id) }}">
                                                    {{ $claim->number_invoice }}
                                                </a>
                                            </td>
                                            <td class="text-end">{{ rtrim(rtrim(money($claim->amount)), '0') }} ₽</td>
                                            <td class="text-end">
                                                @if ($claimItem['paid'] > 0)
                                                    {{ rtrim(rtrim(money($claimItem['paid'])), '0') }} ₽
                                                @else
                                                    -
                                                @endif
                                            </td>
                                            <td>
                                                @if ($claim->historiesPayment->isNotEmpty())
                                                    @php
                                                        $status = $claim->historiesPayment->first()->status;
                                                        $colorMap = [
                                                            'Оплачен' => 'success',
                                                            'Частично оплачен' => 'warning',
                                                            'Не оплачен' => 'danger',
                                                        ];
                                                        $bgColor = $colorMap[$status->name] ?? 'light';
                                                        $textColor = in_array($bgColor, ['light', 'warning'])
                                                            ? 'dark'
                                                            : 'white';
                                                    @endphp
                                                    <span
                                                        class="badge custom-bg-{{ $claim->historiesPayment->first()->status->color }}">
                                                        {{ $claim->historiesPayment->first()->status->name }}
                                                    </span>
                                                @else
                                                    <span class="text-muted">-</span>
                                                @endif
                                            </td>
                                            <td class="text-end {{ $claimItem['remaining'] > 0 ? 'text-danger' : '' }}">
                                                @if ($claimItem['remaining'] > 0)
                                                    {{ rtrim(rtrim(money($claimItem['remaining'])), '0') }} ₽
                                                @else
                                                    -
                                                @endif
                                            </td>
                                        </tr>
                                    @endforeach
                                </tbody>
                            </table>
                            <br>
                        </div>
                    </div>
                @endforeach
            </div>
        @endforeach
    </div>

    {{-- <style>
        .manager-section {
            padding: 1rem 0;
        }

        .client-section {
            padding: 0.75rem 0;
        }

        .table {
            font-size: 0.9rem;
            table-layout: fixed;
            width: 100%;
        }

        .table.fixed-layout {
            table-layout: fixed;
        }

        .table th,
        .table td {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .badge {
            font-weight: normal;
            padding: 0.25rem 0.5rem;
            font-size: 0.8rem;
        }

        a {
            color: #0d6efd;
        }

        .border-bottom {
            border-color: #eee !important;
        }

        .text-truncate {
            max-width: 0;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    </style> --}}
@endsection
