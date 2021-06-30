import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from '../components/head'
import React from 'react';

function home(){
    return(
        <React.Fragment>
        <Head></Head>
        <div class ="container bg-dark" style={{height: '85vh'}}>
            <h1 class="text-success">Hello world !!!</h1>
        </div>
        </React.Fragment>
    )
}

export default home;