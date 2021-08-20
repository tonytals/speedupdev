<?php


namespace App\Services;

interface UsuarioServiceInterface
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
    public function atualizarUsuario($data, $id);
}
