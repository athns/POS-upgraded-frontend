import React, { Component } from 'react';
import axios from 'axios';
import './OptionsContainer.css'

const desertOrderArray = [];

class DesertOptions extends Component {
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
                            <h3>Add a Scoop!</h3>
                            <ul className='center'>
                                <li className='center'><button type='radio'>1 scoop vanilla</button></li>
                                <li className='center'><button type='radio'>1 scoop chocolate</button></li>
                                <li className='center'><button type='radio'>1 scoop strawberry</button></li>
                            </ul>
                            </div>
                    </form>
                        <a href='http://localhost:3000/MainMenu' className='buttonClass'>
                            <button type='submit'>Order More!</button>
                        </a>
                </div>



            </div>

        )
    }
}

export default DesertOptions;

function placeOrder() {

}
