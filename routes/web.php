<?php

use Illuminate\Support\Facades\Route;


Route::get('admin/{vue_capture?}', function () {
    return view('admin');
})->where('vue_capture', '[\/\w\.-]*');
Route::get('/{vue_capture?}', function () {
    return view('front');
})->where('vue_capture', '[\/\w\.-]*');
