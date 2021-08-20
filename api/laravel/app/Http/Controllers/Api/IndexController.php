<?php


namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use http\Client\Request;
use App\Services\UsuarioServiceInterface;
use Illuminate\Support\Facades\Mail;
use App\Mail\ConviteMail;

class IndexController extends Controller
{
    // Controller (Request / Validator) -> Service (Service, Repositories) -> Repository (Repositories)
    // Repository -> Model

    // Retorno (Json)
    // 200 -> OK
    // 400  404 500 - Exception
    private $_usuarioService;

    public function __construct(
        UsuarioServiceInterface $usuarioService
    )
    {
        $this->_usuarioService = $usuarioService;
    }

    public function enviarEmail()
    {
        dd(Mail::to('andreolv.ar@gmail.com')->send(new ConviteMail()));
    }
}
