<?php

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Laravel\Passport\Bridge\AccessToken;
use App\Http\Controllers\Api\UsuarioController;
use Laravel\Passport\Http\Controllers\AccessTokenController;

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

/*
* Rotas para autenticação do usuário
*/
Route::post('login', [AccessTokenController::class, 'issueToken'])
    ->middleware('api-login', 'throttle');


// TODO proteger as rotas abaixo sob o middle de autenticação
Route::get('/usuarios', [UsuarioController::class, 'todosUsuarios']);
Route::get('/buscarUsuario/{id}', [UsuarioController::class, 'buscarUsuario']);
Route::post('/atualizarUsuario', [UsuarioController::class, 'update']);
Route::get('/pesquisarUsuario/{key}', [UsuarioController::class, 'search']);


Route::get('/', function () {
    return app()->version();
});


Route::get('/teste', function () {
    return 'Laravel: '.app()->version();
});

Route::get('/convite', 'Api\IndexController@enviarEmail');
