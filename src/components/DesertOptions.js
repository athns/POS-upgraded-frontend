import React, { Component } from 'react';
import axios from 'axios';
import './OptionsContainer.css'

let desertOrderArray = [];

class DesertOptions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flavor: ""
    }
        this.onValueChange = this.onValueChange.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }

    onValueChange(event) {
        this.setState({
            flavor: event.target.value
        });
    }

    formSubmit(event) {
        event.preventDefault();
        desertOrderArray.push(this.state.flavor)
        console.log(desertOrderArray)
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
                    <form onSubmit={this.formSubmit}>
                        <div className='menuOption'>
                            <h3>Add a Scoop!</h3>
                            <ul className='center'>
                                {/* vanilla */}
                                <div className="radio">
                                    <label>
                                        <input
                                            type="radio"
                                            value="vanilla"
                                            onChange={this.onValueChange}
                                        />
                                        Vanilla
                                    </label>
                                    {/* <li className='center'><button type='radio'>1 scoop vanilla</button></li> */}
                                </div>
                                <br />

                                {/* chocolate */}
                                <div className="radio">
                                    <label>
                                        <input
                                            type="radio"
                                            value="chocolate"
                                            onChange={this.onValueChange}
                                        />
                                        chocolate
                                    </label>
                                    {/* <li className='center'><button type='radio'>1 scoop chocolate</button></li> */}
                                </div>
                                <br />

                                {/* strawberry */}
                                <div className="radio">
                                    <label>
                                        <input
                                            type="radio"
                                            value="strawberry"
                                            onChange={this.onValueChange}
                                        />
                                        strawberry
                                    </label>
                                    {/* <li className='center'><button type='radio'>1 scoop strawberry</button></li>*/}
                                </div>
                                <br />
                            </ul>
                        </div>
                        <button onClick={this.submit}>add to cart</button>
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

export default DesertOptions;

function placeOrder() {

}
