<?php

namespace App\Repositories;

use App\Models\User;
use App\Repositories\UsuarioRepositoryInterface;

class UsuarioRepository implements UsuarioRepositoryInterface
{

    /**
     * @var User
     */
    protected $usuario;

    public function __construct(User $usuario)
    {
        $this->usuario = $usuario;
    }

    /**
     * Find the user instance for the given username.
     *
     * @param  string  $username
     * @return \App\User
     */
    public function findForPassport($username)
    {
        return $this->usuario->where('name', $username)->first();
    }


    /**
     * Busca todos os usuários
     *
     * @return User $usuario
     */
    public function todosUsuarios()
    {
        return $this->usuario->get();
    }

    /**
     * Busca usuario pelo dd
     *
     * @return User $usuario
     */
    public function buscarUsuario($id)
    {
        return $this->usuario
            ->where('id', $id)
            ->get();
    }

    /**
     * Atualiza o registro
     * @param $data
     * @return User
     */
    public function update($data, $id)
    {
        $user = $this->usuario
            ->find($id);

        $user->name = $data['name'];
        $user->email = $data['email'];
        $user->cpf = $data['cpf'];
        $user->data_nascimento = $data['data_nascimento'];
        $user->sexo = $data['sexo'];
        $user->email_institucional = $data['email_institucional'];
        $user->telefone = $data['telefone'];
        $user->email_pessoal = $data['email_pessoal'];
        $user->telefone_alternativo = $data['telefone_alternativo'];
        $user->unidade_finalistica = $data['unidade_finalistica'];
        $user->setor = $data['setor'];
        $user->cargo = $data['cargo'];
        $user->situacao_mec = $data['situacao_mec'];
        $user->perfil = $data['perfil'];
        $user->situacao = $data['situacao'];

        $user->update();

        return $user;
    }

}
