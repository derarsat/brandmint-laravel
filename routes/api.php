<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CLientController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\UploadImageController;
use App\Models\Client;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/login', [AuthController::class, 'login']);
Route::group(["prefix" => "dashboard", "middleware" => 'auth:sanctum'], function () {
    Route::post('/save-project', [ProjectController::class, "save"]);
    Route::get('/projects', [ProjectController::class, "index"]);
    Route::post('/add-client', [CLientController::class, "add"]);
    Route::get('/get-clients', [CLientController::class, "all"]);
});

Route::group(["prefix" => "front"], function () {
    Route::get('/projects', function () {
        return response()->json(Project::where("published", "=", true)->with("images")->get());
    });
    Route::get('/featured-projects', function () {
        return response()->json(Project::where("published", "=", true)->where("featured", "=", "true")->with("images")->get());
    });
    Route::get('/get-project/{id}', function ($id) {
        return response()->json(Project::where("id", "=", $id)->with("images")->get());
    });
    Route::get('/get-projects-by-category/{category}', function ($category) {
        return response()->json(Project::where("category", "=", $category)->where("published", "=", true)->with("images")->get());
    });
    Route::get('/clients', function () {
        return response()->json(Client::all());
    });
});
