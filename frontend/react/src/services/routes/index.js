import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from '../../pages/Home';
import LogadoTeste from "../../pages/LogadoTeste";
import UserList from "../../components/User/List";
import UserEdit from "../../components/User/Edit";

// import * as FaIcons from 'react-icons/fa';

import {PrivateRoute} from "../auth";

import "@govbr/dsgov/dist/dsgov.min.css";

function AppRoute() {

    return (
        <BrowserRouter >
            <Switch>
                <Route exact path="/" component={Home}/>
                {/*<Route path="*" component={Error}/>*/}
                <PrivateRoute path="/app" component={LogadoTeste} />
                <PrivateRoute path="/usuarios" component={UserList} />                
                <PrivateRoute path="/editarUsuario/:id" component={UserEdit} />
            </Switch>
        </BrowserRouter >
    );
}

export default AppRoute;