import React, {Component} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from '../components/head';
import { render } from '@testing-library/react';
import { Redirect } from 'react-router';

export default class Cadastro extends Component{

  constructor(props){
    super(props);
    this.state ={
       name:'',
       email:'',
       senha:'',
       senha2: '',
       redirect: false,
    }


    this.cadastrar = this.cadastrar.bind(this);
  }
  cadastrar(e){ 
    if(this.state.senha != this.state.senha2){
      alert("Iforme duas senhas iguais!")
    }else{
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({"name":this.state.name,"email":this.state.email,"senha":this.state.senha,"image":"https://i.pinimg.com/564x/50/93/3b/50933b3d277a46befc38b321b979a04f.jpg"});
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch("http://localhost:8080/register", requestOptions)
        .then(response => response.json())
        .then(response =>{
          if(response == 'Já existe esse email'){
            alert('Já existe esse email cadastrado!!!')
          }else{
            this.setState({redirect:true})
            alert('Cadastrado com sucesso!!!')
            
          }
        })
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
      }
    

      

        e.preventDefault()

  }

render(){
  if(this.state.redirect === true){
    return <Redirect
    to={{
      pathname: "/login",  
    }}
      />
  }
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
}