import React, {Component} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from '../components/head';
import { render } from '@testing-library/react';
import { Redirect } from 'react-router';

function login () {
  return (
    <React.Fragment>
    <Head></Head>
    
    <footer style={{marginTop:500}}>
      <div class="bg-dark text-warning pt-3" style={{height:'75px', textAlign:'center'}}>
        <span>© 2021 Copyright: Guilherme</span>
      </div>
    </footer>
    </React.Fragment>
  );
}
  export default login;