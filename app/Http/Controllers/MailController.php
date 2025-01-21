<?php

namespace App\Http\Controllers;

use App\Mail\Feedback;
use App\Mail\TestMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class MailController extends Controller
{

    public function sendMail($params)
    {
        Mail::to('romerayun@gmail.com')->send(new Feedback($params));
        return view('mail.feedback');
    }

}
