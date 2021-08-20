import React, { useEffect, useState } from 'react';
import { UsersService } from '../../services/user';
import { useParams } from 'react-router-dom';
import BrSelect from '../select';
import BrDatePicker from '../datepicker';

export default () => {

    let { id } = useParams();
    const [usuario, setUsuario] = useState([]); 

    useEffect(() => {
        UsersService.getUserById(id)
            .then((response) => {
                setUsuario(response.data[0])
            })
            .catch((err) => {
                console.error(err)
            });
    }, []);

    const handleInputChange = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        usuario[name] = value;
        console.log(usuario);
        setUsuario(usuario);
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log(usuario);
        UsersService.updateUser(usuario)
            .then((response) => {
                setUsuario(response.data)
            })
            .catch((err) => {
                console.error(err)
            });
    }

    return (
        <div className="container">
            <h1>Editar Usuário</h1>
            <form onSubmit={handleSubmit}> 
                <div className="row">
                    <div className="col-4">
                        <div className="br-input medium">
                            <label className="m-0" htmlFor="name">Nome Completo</label>
                            <input id="name" name="name" type="text" placeholder="Nome Completo" defaultValue={usuario.name} onChange={handleInputChange} readOnly required length="255" />
                        </div>
                    </div>
                    <div className="col-4">
                        <BrSelect 
                            label="Sexo" 
                            id="sexoId" 
                            name="sexo" 
                            required="required" 
                            onChange={handleInputChange}
                            options={["masculino","feminino"]}
                            selected={usuario.sexo}
                            >                            
                        </BrSelect>
                    </div>
                    <div className="col-4">
                        <BrDatePicker 
                            id="data_nascimento"
                            label="Data de Nascimento"
                            required="required"
                            onChange={handleInputChange}
                            defaultValue={usuario.data_nascimento}
                             />                        
                    </div>  
                </div>
                <div className="row my-3">
                    <div className="col-4">
                        <div className="br-input medium">
                            <label className="m-0" htmlFor="cpf">CPF</label>
                            <input id="cpf" type="text" placeholder="CPF" name="cpf" defaultValue={usuario.cpf} onChange={handleInputChange} required readOnly length="14" />
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="br-input medium">
                            <label className="m-0" htmlFor="telefone">Telefone</label>
                            <input id="telefone" name="telefone" type="text" placeholder="(00) 0000-0000" defaultValue={usuario.telefone} onChange={handleInputChange} required/>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="br-input medium">
                            <label className="m-0" htmlFor="telefone_alternativo">Telefone Alternativo</label>
                            <input id="telefone_alternativo" name="telefone_alternativo" type="text" placeholder="(00) 0000-0000" defaultValue={usuario.telefone_alternativo} onChange={handleInputChange}/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <div className="br-input medium">
                            <label className="m-0" htmlFor="email_institucional">E-mail Institucional</label>
                            <input id="email_institucional" name="email_institucional" type="text" defaultValue={usuario.email_institucional} placeholder="@" required="required" onChange={handleInputChange}/>
                        </div>
                    </div>
                    <div className="col-4">
                        <BrSelect label="Selecionar Unidade Finalística" 
                                    id="unidade_finalistica" 
                                    required="required" 
                                    onChange={handleInputChange}
                                    options={["Unidade 01","Unidade 02", "Unidade 03"]}
                                    selected={usuario.unidade_finalistica}
                                    >
                        </BrSelect>                        
                    </div>
                    <div className="col-4">
                        <BrSelect label="Selecionar Setor" 
                                    id="setor" 
                                    onChange={handleInputChange}
                                    options={['Setor 01', 'Setor 02', 'Setor 03']}
                                    selected={usuario.setor}
                                    >
                        </BrSelect>                           
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <div className="br-input medium">
                            <label className="m-0" htmlFor="email_pessoal">E-mail Pessoal</label>
                            <input id="email_pessoal" name="email_pessoal" type="text" placeholder="@" defaultValue={usuario.email_pessoal} onChange={handleInputChange} />
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="br-input medium">
                            <label className="m-0" htmlFor="cargo">Cargo</label>
                            <input id="cargo" defaultValue={usuario.cargo} name="cargo" type="text" placeholder="Cargo" onChange={handleInputChange}/>
                        </div>
                    </div>
                    <div className="col-4">
                        <BrSelect label="Situação no MEC" 
                                    id="situacao_mec" 
                                    onChange={handleInputChange}
                                    options={["Efetivo","Cedido","CTU","Consultor","Exercício Descentralizado","Exercício Provisório","Terceirizado","Anistiado CLT","Cargo Comissionado","Requisitado","Colaboração Técnica","Examinador Externo"]}
                                    selected={usuario.situacao_mec}
                                    >                            
                        </BrSelect>                          
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <BrSelect label="Definir Perfil" 
                                    id="perfilId" 
                                    name="perfil" 
                                    required="required" 
                                    onChange={handleInputChange}
                                    options={['Administrador do Sistema']}
                                    selected={usuario.perfil}
                                    >
                        </BrSelect>                          
                    </div>
                    <div className="col-4">
                        <BrSelect label="Situação" 
                                    id="situacao" 
                                    required="required" 
                                    onChange={handleInputChange}
                                    options={['Ativo', 'Inativo']}
                                    selected={usuario.situacao}
                                    >
                        </BrSelect>                         
                    </div>
                    <div className="col-4">

                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-4">

                    </div>
                    <div className="col-4">
                        
                        <button className="br-button danger mt-3 mt-sm-0 ml-sm-3" type="button">Cancelar</button>
                        <button className="br-button primary mt-3 mt-sm-0 ml-sm-3" type="submit">Salvar</button>

                    </div>
                    <div className="col-4">

                    </div>
                </div>
                  
            </form> 
        </div>
    )
}