<?php


namespace App\Services;

use Exception;
use InvalidArgumentException;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use App\Services\UsuarioServiceInterface;
use App\Repositories\UsuarioRepositoryInterface;

class UsuarioService implements UsuarioServiceInterface
{
    /**
     * @var $usuarioRepository
     */
    protected $usuarioRepository;

    public function __construct(UsuarioRepositoryInterface $usuarioRepository)
    {
        $this->usuarioRepository = $usuarioRepository;
    }

    /**
     * Buscar Usuário pelo Id
     *
     * @param id
     * @return String
     */
    public function buscarUsuario($id)
    {
        return $this->usuarioRepository->buscarUsuario($id);
    }

    /**
     * Busca todos os usuários
     *
     * @return String
     */
    public function todosUsuarios()
    {
        return $this->usuarioRepository->todosUsuarios();
    }

    /**
     * Atualizar usuário
     * @param array $data
     * @return String
     */
    public function atualizarUsuario($data, $id)
    {

        //BEGIN
        DB::beginTransaction();

        try {
            $data = $this->usuarioRepository->update($data, $id);
        } catch (Exception $e){

            DB::rollback();
            Log::info('error:', ['msg' => $e]);

            throw new InvalidArgumentException("Não foi possível atualizar o usuário");
        }

        DB::commit();

        return $data;

    }
}
