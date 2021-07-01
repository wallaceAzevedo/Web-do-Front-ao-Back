import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import jogos from './pages/Categorias';
import home from './pages/Home';
import login from './pages/login';
import register from './pages/register';

function route (){
    return (
        <BrowserRouter>
            <Route path="/" exact component = {home}/>
            <Route path="/categoria" component = {jogos}/>
            <Route path="/login" component = {login}/>
            <Route path="/register" component = {register}/>
        </BrowserRouter>
    )
}

export default route;