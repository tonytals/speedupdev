import React from 'react';

const Primeiro = props => {
    return (
        <div>
            <h1>Primeira Lista de Desejos</h1>
            <hr></hr>
            <h2>{props.sub}</h2>
            <h2>{props.qualquernome}</h2>
        </div>
    )
}

export default Primeiro;