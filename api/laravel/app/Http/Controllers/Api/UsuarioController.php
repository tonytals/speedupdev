<?php

namespace App\Http\Controllers\Api;

use Exception;
use InvalidArgumentException;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Services\UsuarioServiceInterface;
use Illuminate\Support\Facades\Validator;

class UsuarioController extends Controller
{

    private $_usuarioService;

    public function __construct(
        UsuarioServiceInterface $usuarioService
    )
    {
        $this->_usuarioService = $usuarioService;
    }

    /**
     * Buscar Usuário pelo Id
     *
     * @param id
     * @return Response
     */
    public function buscarUsuario($id)
    {

        $result = ['status' => 200];

        try {
            $data = $this->_usuarioService->buscarUsuario($id);
        } catch ( Exception $e ) {
            $result = [
                'status' => 500,
                'error' => $e->getMessage()
            ];
        }

        return response()->json($data, $result['status']);
    }

    /**
     * Todos os Usuários
     *
     * @return Response
     */
    public function todosUsuarios()
    {

        $result = ['status' => 200];

        try {
            $data = $this->_usuarioService->todosUsuarios();
        } catch (Exception $e){
            $result = [
                'status' => 500,
                'error' => $e->getMessage()
            ];
        }

        return response()->json($data, $result['status']);
    }

    /**
     * Atualizar Usuário
     *
     * @param Request $request
     * @param id
     * @return Response
     */
    public function update(Request $request)
    {
        $result = ['status' => 200];

        $data = $request->all();

        $validator = Validator::make($data, [
            'cpf' => 'required|max:14',
            'name' => 'required|max:255',
            'data_nascimento' => 'required|max:10',
            'sexo' => 'required|max:10',
            'email_institucional' => 'required|max:100',
            'telefone' => 'required|max:14',
            'email_pessoal' => 'max:100',
            'telefone_alternativo' => 'max:15',
            'unidade_finalistica' => 'required|integer',
            'setor' => 'max:255',
            'cargo' => 'max:100',
            'situacao_mec' => 'max:100',
            'perfil' => 'required|integer',
            'situacao' => 'required'
        ]);

        $id = $request->id;

        if($validator->fails()) {
            return response()->json($validator->errors(), 200);
        }

        try {
            $data = $this->_usuarioService->atualizarUsuario($data, $id);
        } catch (Exception $e){
            $result = [
                'status' => 500,
                'error' => $e->getMessage()
            ];
        }

        return response()->json($data, $result['status']);

    }

    /**
     * Pesquisar Usuário
     *
     * @param key
     * @return Response
     */
    public function search($key)
    {
        return response()->json($key);
    }

}
