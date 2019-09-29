import React, { Component } from 'react';

export default class Question extends Component {


    repostasClick(event){
            event.preventDefault();
            this.props.responder(event.currentTarget.textContent);
    }

    confirmClick(){
        event.preventDefault();
        this.props.confirm();
}

    render() {

        return (
       
            <div>
                <div id="frame">
                   
                    <h2 className="pergunta" id="pergunta"> {this.props.anwswer.pergunta}</h2>
                    <p className="descricaoRespostaCorreta" id="descricaoRespostaCorreta">&nbsp;</p>
                    <ul id="choice-block">   
                      {this.props.anwswer.respostas.map(item => 
                      <li 
                      key={item} 
                      onClick={this.repostasClick.bind(this)}
                      className="choice choice-box"
                      >
                      {item}
                      </li>)}
                    </ul>
                    <div 
                     className="choice-box" 
                     id="submitbutton" 
                     onClick={this.confirmClick.bind(this)}
                     style={this.props.showConfirm ? {} : { display: 'none' }}
                     >OK</div>
                    
                </div>
            </div>
        );
    }
}