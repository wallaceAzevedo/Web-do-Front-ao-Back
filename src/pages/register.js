import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from '../components/head';
//import { render } from '@testing-library/react';
//import { Redirect } from 'react-router';

function register () {
  return (
  <React.Fragment>
    <Head></Head>
    <div class="container mt-3 bg-dark">
      <div class="card p-3 bg-dark">
      <form class="bg-dark ">
      <div class="form-group">
          <label class="text-success mt-3 mb-3" for="exampleInputEmail1">Username</label>
          <input type="text" class="form-control bg-light p-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Choose Username"/>         
        </div>
        <div class="form-group">
          <label class="text-success mt-3 mb-3" for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control bg-light p-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>         
        </div>
        <div class="form-group">
          <label class="text-success mt-3 mb-3 " for="exampleInputEmail1">Password</label>
          <input type="password" class="form-control bg-light p-2" id="exampleInputPassword1" placeholder="Password"/>
        </div>
        <div class="form-group">
          <label class="text-success mt-3 mb-3" for="exampleInputEmail1">Confirm Password</label>
          <input type="password" class="form-control bg-light p-2" id="exampleInputPassword1" placeholder="Confirm Password"/>
        </div>
        
        <button type="submit" class="btn btn-success mt-3">Register</button>
      </form>
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
  export default register;