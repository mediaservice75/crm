<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreClients extends FormRequest
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
            'name' => 'required',
            'logo' => 'nullable|image',
            'phone' => 'required|regex:/^(\+7)(\()[0-9]{3}(\))[0-9]{3}(\-)[0-9]{2}(\-)[0-9]{2}$/',
            'email' => 'nullable|email',
            'address' => 'nullable',
            'website' => 'nullable',
            'date_of_birth' => 'nullable|date',

        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'Поле наименование не может быть пустым',
            'email.required' => 'Поле email не может быть пустым',
            'logo.required' => 'Поле логотип не может быть пустым',
            'logo.image' => 'Загружаемый файл должен быть в формате (jpeg, png, bmp, gif, svg, webp)',
            'email.email' => 'Поле email должно быть в формате info@example.ru',
            'address.required' => 'Поле адрес не может быть пустым',
            'website.required' => 'Поле сайт не может быть пустым',
            'phone.required' => 'Поле номер телефона не может быть пустым',
            'date_of_birth.required' => 'Поле день рождения компании не может быть пустым',
            'phone.regex' => 'Поле номер телефона должен быть в формате +7(999)999-99-99',
        ];
    }
}
