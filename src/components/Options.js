import React, { Component } from 'react';
import axios from 'axios';
import './OptionsContainer.css'

const orderArray = [];

class Options extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <body>
                <div className='NavBar'>
                    <h1 className='chosenItem'> Menu Item Chosen </h1>
                </div>
                <span className='sideBarRight'></span>
                <span className='sideBarLeft'></span>
                <div className='optionsContainer'>
                    <div className='menuOption'>
                        <h3>Option 1</h3>
                        <ul className='center'>
                            <li className='center'><button type='radio'>Text</button></li>
                            <li className='center'><button type='radio'>Text</button></li>
                            <li className='center'><button type='radio'>Text</button></li>
                            <li className='center'><button type='radio'>Text</button></li>
                            <li className='center'><button type='radio'>Text</button></li>
                            <li className='center'><button type='radio'>Text</button></li>
                            <li className='center'><button type='radio'>Text</button></li>
                            <li className='center'><button type='radio'>Text</button></li>
                        </ul>
                        <div className='menuOption'>
                            <h3>Option 2</h3>
                            <ul className='center'>
                                <li className='center'><button type='radio'>Text</button></li>
                                <li className='center'><button type='radio'>Text</button></li>
                                <li className='center'><button type='radio'>Text</button></li>
                                <li className='center'><button type='radio'>Text</button></li>
                                <li className='center'><button type='radio'>Text</button></li>
                                <li className='center'><button type='radio'>Text</button></li>
                                <li className='center'><button type='radio'>Text</button></li>
                                <li className='center'><button type='radio'>Text</button></li>
                            </ul>
                            <div className='menuOption'>
                                <h3>Option 3</h3>
                                <ul className='center'>
                                    <li className='center'><button type='radio'>Text</button></li>
                                    <li className='center'><button type='radio'>Text</button></li>
                                    <li className='center'><button type='radio'>Text</button></li>
                                    <li className='center'><button type='radio'>Text</button></li>
                                    <li className='center'><button type='radio'>Text</button></li>
                                    <li className='center'><button type='radio'>Text</button></li>
                                    <li className='center'><button type='radio'>Text</button></li>
                                    <li className='center'><button type='radio'>Text</button></li>
                                </ul>
                                <h3>Option 4</h3>
                                <div className='menuOption'>
                                    <ul className='center'>
                                        <li className='center'><button type='radio'>Text</button></li>
                                        <li className='center'><button type='radio'>Text</button></li>
                                        <li className='center'><button type='radio'>Text</button></li>
                                        <li className='center'><button type='radio'>Text</button></li>
                                        <li className='center'><button type='radio'>Text</button></li>
                                        <li className='center'><button type='radio'>Text</button></li>
                                        <li className='center'><button type='radio'>Text</button></li>
                                        <li className='center'><button type='radio'>Text</button></li>
                                    </ul>
                                    <div className='menuOption'>
                                        <h3>Option 5</h3>
                                        <ul className='center'>
                                            <li className='center'><button type='radio'>Text</button></li>
                                            <li className='center'><button type='radio'>Text</button></li>
                                            <li className='center'><button type='radio'>Text</button></li>
                                            <li className='center'><button type='radio'>Text</button></li>
                                            <li className='center'><button type='radio'>Text</button></li>
                                            <li className='center'><button type='radio'>Text</button></li>
                                            <li className='center'><button type='radio'>Text</button></li>
                                            <li className='center'><button type='radio'>Text</button></li>
                                        </ul>
                                        <div className='menuOption'>
                                            <h3>Option 6</h3>
                                            <ul className='center'>
                                                <li className='center'><button type='radio'>Text</button></li>
                                                <li className='center'><button type='radio'>Text</button></li>
                                                <li className='center'><button type='radio'>Text</button></li>
                                                <li className='center'><button type='radio'>Text</button></li>
                                                <li className='center'><button type='radio'>Text</button></li>
                                                <li className='center'><button type='radio'>Text</button></li>
                                                <li className='center'><button type='radio'>Text</button></li>
                                                <li className='center'><button type='radio'>Text</button></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>


            </body>

        )
    }
}

export default Options;