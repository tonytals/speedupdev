import React from 'react';
import BrSelect from '../select';

const SearchUser = props => {
    return (
        <div className="container my-4">
            <form>
                <fieldset>
                    <legend>Pesquisar Usuário</legend>
                    <div className="row my-2">
                        <div className="col-6">
                            <div className="br-input medium">
                                <label className="m-0" htmlFor="name">Nome Completo</label>
                                <input id="name" name="name" type="text" placeholder="Nome Completo" length="255" />
                            </div>
                        </div>                    
                        <div className="col-3">
                            <div className="br-input medium">
                                <label className="m-0" htmlFor="name">CPF</label>
                                <input id="cpf" name="cpf" type="text" placeholder="CPF" length="11" />
                            </div>
                        </div>    
                        <div className="col-3">
                            <BrSelect
                                label="Perfil"                    
                            />
                        </div>            
                    </div>
                    <div className="row my-2">
                        <div className="col-4">
                            <BrSelect
                                label="Situação"                    
                            />
                        </div>
                        <div className="col-8">                    
                            <button class="br-button secondary mt-4" type="button" aria-label="Ícone ilustrativo"><i class="fas fa-search mr-1" aria-hidden="true"></i>Pesquisar</button>
                            <button class="br-button secondary mt-4 ml-sm-3" type="button" aria-label="Ícone ilustrativo"><i class="fas fa-undo mr-1" aria-hidden="true"></i>Limpar Pesquisa</button>
                        </div>
                    </div>
                </fieldset>
            </form>            
        </div>
    )
}

export default SearchUser;