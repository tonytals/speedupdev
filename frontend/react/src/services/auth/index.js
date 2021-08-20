import {Redirect, Route} from "react-router-dom";
import React from "react";
import axios from "axios";

export const isAuth = () => {
    // TODO: construir ligação com laravel para autenticação

    let dados = {usulogin: 'andreolv',ususenha: 'andre123'};

    axios.post('http://localhost:7081/api/login', dados)
        .then(
            response => console.log(JSON.stringify(response.data))
        )
        .catch(error => {
                console.log("ERRO:: ",error)
            }
        )


    return true;
}

export const PrivateRoute = ({component: Component, ...rest}) => {
    return <Route {...rest}
           render={props => (
               isAuth() ? (
                   <Component {... props}/>
               ): (
                   <Redirect to={{ pathname: '/', state: { from: props.location}}}/>
               )
           )
           }
    />
}