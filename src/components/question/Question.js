import React, { Component } from 'react';

export default class Question extends Component {
    render() {

        function AnswersList(answers) {
           let count = 0;
            const listItems = answers.map((answer) =>
            <li key={answer.toString()}><span>{++count}</span> 
            <p>{answer}</p></li>           
            );

            return (
              <ul>
                {listItems}
              </ul>
            );
          }
         
        return (
           
            <div className="answers">
                 <h1>{this.props.question.question}</h1>
                 {AnswersList(this.props.question.answers)}
                <button 
                onClick={ ()=>{
                  this.props.handeclick(this.props.question)
                }} >Confirmar</button>
            </div>

        );
    }

}

