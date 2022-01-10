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
                            <h3>Side of Fries?</h3>
                            <ul className='center'>
                                <li className='center'><button type='radio'>Small Fries</button></li>
                                <li className='center'><button type='radio'>Medium Fries</button></li>
                                <li className='center'><button type='radio'>Large Fries</button></li>
                                <li className='center'><button type='radio'>Small Chilli Cheese Fry</button></li>
                                <li className='center'><button type='radio'>Medium Chilli Cheese Fry</button></li>
                                <li className='center'><button type='radio'>Large Chilli Cheese Fry</button></li>
                            </ul>
                            <div className='menuOption'>
                                <h3>Side Soup</h3>
                                <ul className='center'>
                                    <li className='center'><button type='radio'>Tomatoe Soup</button></li>
                                    <li className='center'><button type='radio'>Chicken Gnochi</button></li>
                                    <li className='center'><button type='radio'>Beef Stew</button></li>
                                    <li className='center'><button type='radio'>Soup Of the Day</button></li>
                                </ul>
                                <div className='menuOption'>
                                    <h3>Soup Size</h3>
                                    <ul className='center'>
                                        <li className='center'><button type='radio'>Half Bowl</button></li>
                                        <li className='center'><button type='radio'>Full Bowl</button></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* <a href='http://localhost:3000/MainMenu' className='buttonClass'>
                            <button type='submit'>Place Your Order!</button>
                        </a> */}
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
