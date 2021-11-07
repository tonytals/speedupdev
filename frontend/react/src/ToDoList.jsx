import React, { useState } from 'react';

const ToDoList = props => {

    const [tarefa, setTarefa] = useState('');

    const ControlaEnvio = (event) => {
        event.preventDefault();
        console.log(tarefa);
    }

    const ControleAsMudancas = (event) => {
        setTarefa(event.target.value);
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
                    name="tarefa" 
                    id="tarefa" 
                    placeholder="Digite a Tarefa"
                    onChange={ControleAsMudancas}                    
                    />
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default ToDoList;