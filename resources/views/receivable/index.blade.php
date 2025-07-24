@extends('layout.layout')

@section('page-heading')
    Дебиторская задолженность по менеджерам
@endsection

@section('content')
    <div class="debt-list">
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
                        {{ money($managerData['total']) }}
                    </div>
                </div>

                @foreach ($managerData['clients'] as $clientData)
                    <div class="client-section mb-4">
                        <div class="client-header d-flex justify-content-between align-items-center mb-2 pb-2 border-bottom">
                            <h5 class="m-0">
                                <a href="{{ route('clients.show', $clientData['client']->id) }}" class="text-decoration-none">
                                    {{ $clientData['client']->name }}
                                </a>
                                @if ($clientData['client']->requisite && $clientData['client']->requisite->fullName)
                                    <small class="text-muted ms-2">
                                        ({{ $clientData['client']->requisite->fullName }})
                                    </small>
                                @endif
                            </h5>
                            <div class="text-danger">
                                {{ money($clientData['total']) }}
                            </div>
                        </div>

                        <div class="claims-list mt-2">
                            <table class="table table-borderless">
                                <thead>
                                    <tr class="text-muted border-bottom">
                                        <th class="fw-normal small">Дата</th>
                                        <th class="fw-normal small">№</th>
                                        <th class="fw-normal small">Услуга</th>
                                        <th class="fw-normal small text-end">Сумма</th>
                                        <th class="fw-normal small text-end">Оплачено</th>
                                        <th class="fw-normal small text-end">Остаток</th>
                                        <th class="fw-normal small">Статус</th>
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
                                            <td>{{ $claim->service->name ?? '-' }}</td>
                                            <td class="text-end">{{ money($claim->amount) }}</td>
                                            <td class="text-end">
                                                @if ($claimItem['paid'] > 0)
                                                    {{ money($claimItem['paid']) }}
                                                @else
                                                    -
                                                @endif
                                            </td>
                                            <td class="text-end {{ $claimItem['remaining'] > 0 ? 'text-danger' : '' }}">
                                                @if ($claimItem['remaining'] > 0)
                                                    {{ money($claimItem['remaining']) }}
                                                @else
                                                    -
                                                @endif
                                            </td>
                                            <td>
                                                @if ($claim->historiesPayment->isNotEmpty())
                                                    {{-- <span class="badge bg-light text-dark border"> --}}
                                                        {{ $claim->historiesPayment->first()->status->name ?? '-' }}
                                                    {{-- </span> --}}
                                                @endif
                                            </td>
                                        </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                    </div>
                @endforeach
            </div>
        @endforeach
    </div>

    <style>
        .manager-section {
            padding: 1rem 0;
        }

        .client-section {
            padding: 0.75rem 0;
        }

        .table {
            font-size: 0.9rem;
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
    </style>
@endsection
