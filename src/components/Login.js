import React, { Component } from 'react';

export default class Login extends Component {
    

    isEmail(email){
      var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      return regex.test(email);

    }

    isEmailClick() {
      var email =   document.getElementById("email").value;
      if(this.isEmail(email)){
        event.preventDefault();
        this.props.confirmEmail(email);
      }      
    }
    
    

    render() {
        return (

            <div id="frame">
              <img src="/images/logo.png" className="login-logo"/>
                <h3 className="login-title">Este desafio consiste em responder um Quiz técnico sobre o tema desta oficina. Entre com seu email para iniciar o desafio.</h3>
                  <form id="form-login" className="form-inline">
                    <input type="text" id="email" name="email" placeholder="Digite seu e-mail" className="form-control"/>
                    <button type="button" id="start" name="start" className="btn btn-primary" onClick={this.isEmailClick.bind(this)} >Iniciar</button>
                  </form>
            </div>  

        );
    }
}