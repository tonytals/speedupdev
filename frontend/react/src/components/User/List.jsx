import React, { useEffect, useState } from 'react';
import { UsersService } from '../../services/user';
import SearchUser from '../searchUser';

export default () => {

    const [usuarios, setUsuarios] = useState([]); 

    useEffect(() => {
        UsersService.getAllUsers()
            .then((response) => {
                setUsuarios(response.data)
            })
            .catch((err) => {
                console.error(err)
            });
    }, []); 

    return (
        <div className="container">
            <h1>Lista de Usuários</h1>
            <SearchUser></SearchUser>
            <div className="br-table" data-search="data-search" data-selection="data-selection">
                <table>
                    <caption>Título da Tabela</caption>
                    <thead>
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Situação</th>
                        <th scope="col">Perfil</th>
                        <th scope="col">Ações</th>
                    </tr>
                    </thead>
                    <tbody>                                            
                    {usuarios.map(usuario => 
                        <tr key={usuario.id}>
                            <td>{usuario.name}</td>                                    
                            <td>{usuario.deleted_at != null ? "Inativo" : "Ativo"}</td>
                            <td>{
                                // @todo perfil de usuário
                                // usuario.perfil
                            }                                    
                            </td>
                            <td>
                                <a className="br-button mt-3 mt-sm-0 ml-sm-3" type="button">Histórico</a>
                                <a href={"/editarUsuario/" + usuario.id} className="br-button mt-3 mt-sm-0 ml-sm-3" type="button">Editar</a>
                            </td>
                        </tr>
                    )}                                   
                    </tbody>
                </table>                               
            </div> 
        </div>
    );
}