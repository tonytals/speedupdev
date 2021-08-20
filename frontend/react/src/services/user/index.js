import api from '../api';

export const UsersService = {

    getAllUsers: function() {
        return api.request({
            method: "GET",
            url: 'usuarios'
        });
    },
    
    getUserById: function(id) {
        return api.get('buscarUsuario/' + id);        
    },

    updateUser: function(usuario){
        return api.post('atualizarUsuario', usuario);
    }

}
