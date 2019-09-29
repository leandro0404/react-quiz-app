import React, { Component } from 'react';
import Question from './Question';
import Login from './Login'
import data from '../data/data';


let dados = data;

const initialState =  {
    score : 0,
    questionsAnswered :0,
    showConfirm : false,
    email : null,
    start :false
};

export default class App  extends Component {
   
    constructor(){
     super();
        this.state = initialState;
    }

    responder(key){
      dados[this.state.questionsAnswered].respostaMarcada = key;   
      this.setScore();
    }

    setScore(){
        var countScore = 0;
        dados.forEach(function(item,i){
          if(item.respostaCorreta == item.respostaMarcada)
          countScore ++;
        });
        this.setState ({
            score : countScore,
            showConfirm : true
        });
    }

    confirm(){
        var  number = this.state.questionsAnswered +1;
        this.setState ({
            questionsAnswered : number,
            showConfirm : false
           });
    } 

    confirmEmail(email)
    {
        
        this.setState ({
            email : email,
            start : true
           });
    }

    render() {
       if(!this.state.start)
       {
            return (
                     <Login 
                     confirmEmail ={this.confirmEmail.bind(this)} />
            );
       }
       if(this.state.questionsAnswered == data.length)
       {
            const timer = setTimeout(() => {
                this.setState(initialState);
            }, 5000);

           return (

            <div id="frame">
            <p className="pager" id="pager">pergunta {this.state.questionsAnswered} de  {data.length} </p>
            <h2 className="pergunta" id="pergunta">Você acertou {this.state.score} de {data.length} Questões!</h2>
            <h2>{Math.round(this.state.score / data.length * 100) + '%'} </h2><p className="descricaoRespostaCorreta" id="descricaoRespostaCorreta">
            </p><ul id="choice-block"></ul>
            </div>  
              
           )

       }
       
      
        return (
            
            <div>
                 <p className="pager" id="pager">pergunta {this.state.questionsAnswered +1} de  {data.length} </p>
              <Question 
              anwswer={dados[this.state.questionsAnswered]} 
              responder={this.responder.bind(this)}
              confirm ={this.confirm.bind(this)}
              showConfirm={this.state.showConfirm}
              />  
            </div>
        );
    }
}