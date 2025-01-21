<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreGoal extends FormRequest
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
            'text' => 'required',
            'deadline' => 'date',
            'user_id' => 'nullable|integer',
        ];
    }

    public function messages()
    {
        return [
            'text.required' => 'Поле описание не может быть пустым',
            'deadline.date' => 'Поле срок выполения должен быть в формате дата/время',
            'user_id.integer' => 'Выберите значение из списка',
        ];
    }
}
