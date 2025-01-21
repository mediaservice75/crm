<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreHistory extends FormRequest
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
            'comment' => 'required',
            'status_id' => 'required|integer',
        ];
    }

    public function messages()
    {
        return [
            'comment.required' => 'Поле комментарий не может быть пустым',
            'group_id.required' => 'Поле статус не может быть пустым',
            'group_id.integer' => 'Выберите значение из списка',

        ];
    }

}
