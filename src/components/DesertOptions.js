import React, { Component } from 'react';
import axios from 'axios';
import './OptionsContainer.css'

const desertOrderArray = [];

class DesertOptions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "React"
        };
        this.onChangeValue = this.onChangeValue.bind(this);
    }
    onChangeValue(event) {
        console.log(event.target.value)
    }
    render() {
        return (
            <div className='optionsBody'>
                <span className='sideBarRight'></span>
                <span className='sideBarLeft'></span>
                <div className='NavBar'>
                    <h1 className='chosenItem'> Menu Item Chosen </h1>
                </div>
                <div className='optionsContainer'>
                   
                        <div className='menuOption'>
                            <h3>Add a Scoop!</h3>
                            <ul onChange={this.onChangeValue} className='center'>
                                <li className='center'><button type='radio' value='1 scoop vanilla' name='ice cream'>1 scoop vanilla</button></li>
                                <li className='center'><button type='radio' value='1 scoop chocolate' name='ice cream'>1 scoop chocolate</button></li>
                                <li className='center'><button type='radio' value='1 scoop strawberry' name='ice cream'>1 scoop strawberry</button></li>
                            </ul>
                            </div>
                    
                        <a href='http://localhost:3000/MainMenu' className='buttonClass'>
                            <button type='submit'>Order More!</button>
                        </a>
                </div>



            </div>

        )
    }
}

export default DesertOptions;


