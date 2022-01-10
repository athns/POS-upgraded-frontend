import React, { Component } from 'react';
import axios from 'axios';
import './OptionsContainer.css'

const orderArray = [];

class DrinkOptions extends Component {
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
                            <h3>What size would you like?</h3>
                            <ul className='center'>
                                <li className='center'><button type='radio'>Small Drink</button></li>
                                <li className='center'><button type='radio'>Medium Drink</button></li>
                                <li className='center'><button type='radio'>Large Drink</button></li>
                            </ul>
                            <div className='menuOption'>
                                <h3>For Here? or TO-GO?</h3>
                                <ul className='center'>
                                    <li className='center'><button type='radio'>In-House!</button></li>
                                    <li className='center'><button type='radio'>On The Road!</button></li>

                                </ul>
                                



                                
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

export default DrinkOptions;

function placeOrder() {

}
