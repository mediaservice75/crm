<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\App;
use Illuminate\Validation\Rule;

class StoreUser extends FormRequest
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
            'email' => 'required|email|unique:App\Models\UserM,email,'.$this->user,
            'surname' => 'required',
            'patron' => 'required',
            'phone' => 'required|regex:/^(\+7)(\()[0-9]{3}(\))[0-9]{3}(\-)[0-9]{2}(\-)[0-9]{2}$/',
            'photo' => 'nullable|image',
            'role_id' => 'required|integer',
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'Поле имя должно быть заполнено',
            'email.required' => 'Поле электронная почта должно быть заполнено',
            'surname.required' => 'Поле фамилия должно быть заполнено',
            'patron.required' => 'Поле отчество должно быть заполнено',
            'phone.required' => 'Поле телефон должно быть заполнено',
            'phone.regex' => 'Поле номер телефона должен быть в формате +7(999)999-99-99',
            'photo.image' => 'Загружаемый файл должен быть в формате (jpeg, png, bmp, gif, svg, webp)',
            'email.email' => 'Поле E-mail должно быть в формате info@example.ru',
            'email.unique' => 'Пользователь с таким E-mail уже существует',
            'role_id.required' => 'Поле отдел не может быть пустым',
            'role_id.integer' => 'Поле отдел должно быть в числовом формате',
        ];
    }
}
