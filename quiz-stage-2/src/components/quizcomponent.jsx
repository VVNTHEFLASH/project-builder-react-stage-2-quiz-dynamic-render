import React, { Component } from 'react';
import './quizcomponent.css';
import question from "../resources/question.json"

export default class Quizcomponent extends Component {

    constructor(){
        super();
        this.state = {
            quizquestion: question,
            questionNo: 1
        }
    }

    nextHandler = () => {
        let qNo = this.state.questionNo;
        if(qNo < 15){
            this.setState({ questionNo: qNo + 1 })
        }
        else{
            alert("This is the last question")
        }
    }

    prevHandler = () => {
        let qNo = this.state.questionNo;
        if(qNo > 1){
            this.setState({ questionNo: qNo - 1 })
        }
        else{
            alert("This is the First question")
        }
    }

    quitHandler = () => {
        const quiz = document.getElementsByClassName('quiz-container')[0];

        quiz.style.display = 'none';
    }

    render() {
        return (
            <div className='quiz-container'>
                <div className='question-container'>
                <h1>Question</h1>
                <h3>{this.state.quizquestion[this.state.questionNo-1].question}</h3>
                <span>{this.state.questionNo} of {this.state.quizquestion.length}</span>
                </div>
                <div className='choice-btn'> 
                    <button>{this.state.quizquestion[this.state.questionNo-1].optionA}</button>
                    <button>{this.state.quizquestion[this.state.questionNo-1].optionB}</button>
                    <button>{this.state.quizquestion[this.state.questionNo-1].optionC}</button>
                    <button>{this.state.quizquestion[this.state.questionNo-1].optionD}</button>
                </div>
                <div className='action-btn'>
                    <button id='p-btn' onClick={this.prevHandler}>Previous</button>
                    <button id='n-btn' onClick={this.nextHandler}>Next</button>
                    <button id='q-btn' onClick={this.quitHandler}>Quit</button>
                </div>
            </div>
        )
    }
}
