import React, { useState } from 'react';
import api from './Api';

const ToDoList = props => {

    const [tarefa, setTarefa] = useState([]);    

    const ControleAsMudancas = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        tarefa[name] = value;
        setTarefa(tarefa);        
    }

    const ControlaEnvio = (event) => {
        event.preventDefault();
        console.log(tarefa);
        api.post('inserirTarefa', tarefa)
            .then((response) => {
                //setTarefa(response.data)
                console.log('Resposta Api');
                console.log(response.data);
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }

    return (
        <div>
            <h1>Lista de Afazeres</h1>
            <em>ToDoList.jsx</em>
            <hr></hr>
            <form onSubmit={ControlaEnvio}>
                <h3>Digite a Tarefa</h3>
                <input 
                    type="text" 
                    name="nomeTarefa" 
                    id="nomeTarefa" 
                    placeholder="Digite a Tarefa"
                    onChange={ControleAsMudancas}                    
                    />
                    <br/>
                <input 
                    type="text" 
                    name="responsavel" 
                    id="responsavel" 
                    placeholder="Digite o Responsavel"
                    onChange={ControleAsMudancas}                    
                    />
                <button type="submit">Enviar</button>
            </form>
            <p>
                A tarefa que será cadastradata é: <b>{tarefa}</b>
            </p>
        </div>
    )
}

export default ToDoList;