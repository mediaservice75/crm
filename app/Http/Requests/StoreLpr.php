<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreLpr extends FormRequest
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
            'surname' => 'required',
            'name' => 'required',
            'patron' => 'nullable',
            'post' => 'nullable',
            'phone' => 'nullable|regex:/^(\+7)(\()[0-9]{3}(\))[0-9]{3}(\-)[0-9]{2}(\-)[0-9]{2}$/',
            'date_of_birth' => 'nullable|date',
            'comment' => 'nullable'
        ];
    }

    public function messages()
    {
        return [
            'surname.required' => 'Поле фамилия не может быть пустым',
            'name.required' => 'Поле имя не может быть пустым',
            'patron.required' => 'Поле отчество не может быть пустым',
            'post.required' => 'Поле должность не может быть пустым',
            'phone.required' => 'Поле номер телефона не может быть пустым',
            'phone.regex' => 'Поле номер телефона должен быть в формате +7(999)999-99-99',
            'date_of_birth.required' => 'Поле дата рождения не может быть пустым',
            'date_of_birth.date' => 'Поле дата рождения должно быть в формате даты',
        ];
    }
}
