import React from 'react';
import UserLogin from './user_login';
import { Switch, Route } from 'react-router-dom';
import UserRegister from './user_register';

const Main = () => (
    <Switch>
        <Route exact path="/user_register" component={UserRegister} />
        <Route path="/user_login" component={UserLogin} />
    </Switch>
);

export default Main;