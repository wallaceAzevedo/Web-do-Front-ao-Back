import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from '../components/head';
//import { render } from '@testing-library/react';
//import { Redirect } from 'react-router';

function login () {
  return (
  <React.Fragment>
    <Head></Head>
      <div class="container mt-3 ">
        <h2  style={{justifyContent:'center', alignItems:'center', textAlign:'center', color:'white'}}>Publicações do Forun</h2>
        <div class="bg-dark card text-light m-3 rounded border border-success p-3" style={{height:60}}>
          <p style={{fontSize:19}}>
           <a href="#" style={{color:'white', textDecoration:'none'}}> Sprites RPG</a>
          </p>  
        </div>
    </div>    
    <footer style={{marginTop:500}}>
      <div class="bg-dark text-warning pt-3" style={{height:'75px', textAlign:'center'}}>
        <span>© 2021 Copyright: Wallace</span>
      </div>
    </footer>
  </React.Fragment>
  );
}
  export default login;
