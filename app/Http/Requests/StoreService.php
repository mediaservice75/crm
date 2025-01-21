<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreService extends FormRequest
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
            'category_id' => 'required|integer',
            'group_id' => 'required|integer',
            'user_id' => 'nullable|integer',
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'Поле наименование не может быть пустым',
            'category_id.required' => 'Поле категория не может быть пустым',
            'category_id.integer' => 'Выберите значение из списка',
            'group_id.required' => 'Поле отдел не может быть пустым',
            'group_id.integer' => 'Выберите значение из списка',
            'user_id.integer' => 'Выберите значение из списка',
        ];
    }
}
