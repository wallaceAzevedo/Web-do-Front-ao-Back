import React, {Component} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from '../components/head';

export default class login extends Component {
  constructor(props){
    super(props);
    this.state ={
       email:sessionStorage.getItem('@web/email')              
    }

  }
    render(){
      
    return (
    <React.Fragment>
      <Head></Head>
      <div class="container mt-3 bg-dark">
        <h1>{this.state.email}</h1>
      </div>
      <footer style={{marginTop:500}}>
        <div class="bg-dark text-warning pt-3" style={{height:'75px', textAlign:'center'}}>
          <span>© 2021 Copyright: Wallace</span>
        </div>
      </footer>
    </React.Fragment>
    );
  }
}