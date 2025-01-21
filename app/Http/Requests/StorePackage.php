<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePackage extends FormRequest
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
            'service_id' => 'required|integer',
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'Поле наименование не может быть пустым',
            'service_id.required' => 'Поле услуга не может быть пустым',
            'service_id.integer' => 'Выберите значение из списка',
        ];
    }
}
