import React, { Component } from 'react';
import axios from 'axios';
import './OptionsContainer.css'

const sandwichOderArray = [];

class SandwichOptions extends Component {
    constructor(props) {
        super(props);
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
                    <form>
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
                                    <div className='menuOption'>
                                    <h3>Option 4</h3>
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
                        <a href='http://localhost:3000/MainMenu' className='buttonClass'>
                            <button type='submit'>Place Your Order!</button>
                        </a>
                        <a href='http://localhost:3000/MainMen' className='buttonClass'>
                            <button type='submit'>Order More!</button>
                        </a>
                    </form>
                </div>



            </div>

        )
    }
}

export default SandwichOptions;

function placeOrder() {

}
