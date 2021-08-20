<?php


namespace App\Repositories;

interface UsuarioRepositoryInterface
{
    /*
     *
     */
    public function buscarUsuario($id);

    /**
     *
     */
    public function todosUsuarios();

    /**
     *
     */
    public function update($data, $id);

}
