<?php

namespace App\Http\Controllers;

use App\Models\InstallmentReminder;
use Illuminate\Http\Request;

class NotificationController extends Controller {
    public function markAsRead($id) {
        $reminder = InstallmentReminder::where('id', $id)
            ->where('user_id', auth()->id())
            ->first();

        if (!$reminder) {
            return response()->json(['error' => 'Not found'], 404);
        }

        $reminder->update(['is_read' => true]);

        return response()->json(['success' => true]);
    }
}
