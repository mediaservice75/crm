<?php

namespace App\Http\Controllers;

use App\Models\TemporaryFile;
use Illuminate\Http\Request;

class UploadController extends Controller
{
    public function store(Request $request) {

        if ($request->hasFile('filepond')) {
            $files = $request->file('filepond');

            foreach ($files as $file) {

                $filename = $file->getClientOriginalName();
                $folder = uniqid() . '-' . now()->timestamp;

                $file->storeAs('materials/tmp/' . $folder, $filename);

                TemporaryFile::create([
                    'folder' => $folder,
                    'filename' => $filename
                ]);

                return $folder;
            }
        }

        return '';

    }

    public function goalsStore(Request $request) {

        if ($request->hasFile('filepond')) {
            $files = $request->file('filepond');

            foreach ($files as $file) {

                $filename = $file->getClientOriginalName();
                $folder = uniqid() . '-' . now()->timestamp;

                $file->storeAs('goals/tmp/' . $folder, $filename);

                TemporaryFile::create([
                    'folder' => $folder,
                    'filename' => $filename
                ]);

                return $folder;
            }
        }

        return '';

    }
}
