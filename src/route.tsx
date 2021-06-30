import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import jogos from '../pages/Categorias';
import home from '../pages/Home';

function route (){
    return (
        <BrowserRouter>
            <Route path="/" exact component = {home}/>
            <Route path="/categorias" component = {jogos}/>
        </BrowserRouter>
    )
}

export default route;