import React, {useState} from 'react';
import api from './Api';

const DesireList = props => {

    const [object_name, SetObjectName] = useState([]);

    const ControleEnvio = (event) => {
        event.preventDefault();
        console.log(object_name);

        api.post('inserirItemDesejo', object_name)
            .then((response) => {

                console.log('Resposta Api.');
                console.log(response.data);
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }

    const ControleAsMudancas = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        object_name[name] = value;
        SetObjectName(object_name);
    }

    return (

        <div>
            <h1>Lista de Desejos</h1>
            <h2>Aqui fica a lista de objetos que dejesa guardar. </h2>
            <hr></hr>
            <form onSubmit={ControleEnvio}>
                <label forHtml="object_name">Nome do item:</label><br/>
                <input type="text" id="object_name" name="object_name" onChange={ControleAsMudancas}/><br/>
                <label forHtml="object_value">Preço do item:</label><br/>
                <input type="text" id="object_value" name="object_value" onChange={ControleAsMudancas}/><br/>
                <input type="submit" value="Adicionar"/>
                
            </form>
            
            

        </div>

        
    )
}

export default DesireList;