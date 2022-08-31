<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\URL;

class CLientController extends Controller
{

    public function all(){
        return response()->json(Client::all());
    }
    public function add(Request $request)
    {
        $validatedData = $request->validate([
            'category' => 'required',
            'name' => 'required|string|unique:clients',
            'link' => 'required|string|unique:clients',
            'image' => 'required|image',
        ]);
        $client = new Client();
        $imageName = rand() . '.' . $request->image->extension();
        $request->image->move(public_path('clients'), $imageName);
        $client->name = $validatedData["name"];
        $client->link = $validatedData["link"];
        $client->category = $validatedData["category"];
        $client->image = URL::to("/clients") . "/" . $imageName;
        $client->save();
        return response()->json("Client added successfully");
    }
}
