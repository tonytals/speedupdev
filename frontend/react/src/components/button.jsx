import React from 'react';

const Botao = props => {
    return (
        <div>
            <button 
                type={props.submit == 'sim' ? 'submit' : ''}
                
                >
                    {props.titulo}
            </button> 
        </div>
    )
}

export default Botao;