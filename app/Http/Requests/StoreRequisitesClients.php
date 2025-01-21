<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequisitesClients extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'fullName' => 'nullable',
            'legalForm' => 'nullable',
            'INN' => 'nullable|min:10|max:12|regex:/^[0-9]+$/',
            'OGRN' => 'nullable|min:13|max:15|regex:/^[0-9]+$/',
            'lawAddress' => 'nullable',
            'checkingAccount' => 'nullable|min:20|max:20|regex:/^[0-9]+$/',
            'correspondentAccount' => 'nullable|min:20|max:20|regex:/^[0-9]+$/',
            'BIC' => 'nullable|min:9|max:9|regex:/^[0-9]+$/',
            'nameBank' => 'nullable',
            'KPP' => 'nullable|min:9|max:9|regex:/^[0-9]+$/',
            'KPP_C' => 'nullable|min:9|max:9|regex:/^[0-9]+$/',
            'KBK' => 'nullable|min:20|max:20|regex:/^[0-9]+$/',
            'buhName' => 'nullable',
            'phone' => 'nullable|regex:/^(\+7)(\()[0-9]{3}(\))[0-9]{3}(\-)[0-9]{2}(\-)[0-9]{2}$/',
        ];
    }

    public function messages()
    {
        return [
            'fullName.required' => 'Поле полное наименование организации не может быть пустым',
            'legalForm.required' => 'Поле Организацинно-правовая форма не может быть пустым',
            'INN.required' => 'Поле ИНН не может быть пустым',
            'INN.min' => 'Поле ИНН не может быть меньше 10 символов',
            'INN.max' => 'Поле ИНН не может быть больше 12 символов',
            'INN.regex' => 'Поле ИНН должно состоять только из цифр',
            'OGRN.required' => 'Поле ОГРН/ОГРНИП не может быть пустым',
            'OGRN.min' => 'Поле ОГРН/ОГРНИП не может быть меньше 13 символов',
            'OGRN.max' => 'Поле ОГРН/ОГРНИП не может быть больше 15 символов',
            'OGRN.regex' => 'Поле ОГРН/ОГРНИП должно состоять только из цифр',
            'lawAddress.required' => 'Поле юридический адрес организации не может быть пустым',
            'checkingAccount.required' => 'Поле расчетный счет не может быть пустым',
            'checkingAccount.min' => 'Поле расчетный счет не может быть меньше 20 символов',
            'checkingAccount.max' => 'Поле расчетный счет не может быть больше 20 символов',
            'checkingAccount.regex' => 'Поле расчетный счет должно состоять только из цифр',
            'correspondentAccount.required' => 'Поле корреспондентский счет не может быть пустым',
            'correspondentAccount.min' => 'Поле корреспондентский счет не может быть меньше 20 символов',
            'correspondentAccount.max' => 'Поле корреспондентский счет не может быть больше 20 символов',
            'correspondentAccount.regex' => 'Поле корреспондентский счет должно состоять только из цифр',
            'BIC.required' => 'Поле БИК не может быть пустым',
            'BIC.min' => 'Поле БИК не может быть меньше 9 символов',
            'BIC.max' => 'Поле БИК не может быть больше 9 символов',
            'BIC.regex' => 'Поле БИК должно состоять только из цифр',
            'nameBank.required' => 'Поле наименование банка не может быть пустым',
            'KPP.required' => 'Поле КПП не может быть пустым',
            'KPP.min' => 'Поле КПП не может быть меньше 9 символов',
            'KPP.max' => 'Поле КПП не может быть больше 9 символов',
            'KPP.regex' => 'Поле КПП должно состоять только из цифр',
            'KPP_C.required' => 'Поле КПП не может быть пустым',
            'KPP_C.min' => 'Поле КПП не может быть меньше 9 символов',
            'KPP_C.max' => 'Поле КПП не может быть больше 9 символов',
            'KPP_C.regex' => 'Поле КПП должно состоять только из цифр',
            'KBK.required' => 'Поле КБК не может быть пустым',
            'KBK.min' => 'Поле КБК не может быть меньше 20 символов',
            'KBK.max' => 'Поле КБК не может быть больше 20 символов',
            'KBK.regex' => 'Поле КБК должно состоять только из цифр',
            'buhName.required' => 'Поле ФИО бухгалтера не может быть пустым',
            'phone.required' => 'Поле номер телефон не может быть пустым',
            'phone.regex' => 'Поле номер телефона должен быть в формате +7(999)999-99-99',
        ];
    }
}
