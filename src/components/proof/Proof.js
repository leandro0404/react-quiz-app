import React, { Component } from 'react';
import Question from  '../question/Question'
import Data from '../data'
export default class Proof extends Component {
   
   constructor (props){
      super(props);

      this.state ={
         numberQuestion : 2,
         currentQuestion : 1,
         pontos  : 0,
         questoesRespondidas : []
      }
   }

   setButtonCLick =(question) => {
     this.setState ({currentQuestion:  ++this.state.currentQuestion});
  };

   loopQuestions = (questions) =>{
   return questions[this.state.currentQuestion -1];
}

   render() {
    
        return (
            <div className="container">
                <h1> {this.state.pontos} Acertos de  {this.state.numberQuestion} Questões  </h1>
                  <div className="row">
                        <div className="col-lg-12 col-md-10">
                              <div id="question">
                              <Question
                              handeclick={this.setButtonCLick}
                              question ={this.loopQuestions(Data)}
                              />
                              </div>
                        </div>
                  </div>
            </div>
        );
    }
}