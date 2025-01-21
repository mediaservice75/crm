<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreRoles extends FormRequest
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
            'level' => 'required|integer',
            'group_id' => 'required|integer',
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'Поле наименование не может быть пустым',
            'level.required' => 'Поле уровень доступа не может быть пустым',
            'level.integer' => 'Поле уровень доступа должно быть в числовом формате',
            'group_id.required' => 'Поле отдел не может быть пустым',
            'group_id.integer' => 'Поле отдел должно быть в числовом формате',

        ];
    }
}
