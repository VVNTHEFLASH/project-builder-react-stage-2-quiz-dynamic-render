import React, { Component } from 'react'
import './resultcomponent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';

export default class Resultcomponent extends Component {
    render() {
        return (
            <div className='result-container'>
                <div className='result-head'>
                    <FontAwesomeIcon icon={faCircleCheck} id='cir'></FontAwesomeIcon>
                    <h1>Result</h1>
                </div>
                <div className='mid-container'>
                    <div className='mid-result'>
                        <h2>You need more practice!</h2>
                        <h1>Your Score: 20%</h1>
                    </div>
                    <div className='span-container'>
                        <div className='span-text'>
                            <span>Total number of questions:</span>
                            <span>Number of attempted questions:</span>
                            <span>Number of Correct Answers:</span>
                            <span>Number of Wrong Answers</span>
                        </div>
                        <div className='span-number'>
                            <span>15</span>
                            <span>9</span>
                            <span>3</span>
                            <span>6</span>
                        </div>
                    </div>
                </div>
                <div className='button-result'>
                    <button>Play Again</button>
                    <button>Back to Home</button>
                </div>
            </div>
        )
    }
}
