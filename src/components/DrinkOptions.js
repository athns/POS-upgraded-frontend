import React, { Component } from 'react';
import axios from 'axios';
import './OptionsContainer.css'

const orderArray = [];

class DrinkOptions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drinkSize: "",
            house: ""
    }
        this.onSizeChange = this.onValueChange.bind(this);
        this.onValueChange = this.onValueChange.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }

    onValueChange(event) {
        this.setState({
            selectedOption: event.target.value
        });
    }

    formSubmit(event) {
        event.preventDefault();
        console.log(this.state.selectedOption)
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
                            <form onSubmit={this.formSubmit}>

                                {/* small drink */}
                                <div className="radio">
                                    <label>
                                        <input
                                            type="radio"
                                            value="SmallDrink"
                                            checked={this.state.selectedOption === "SmallDrink"}
                                            onChange={this.onValueChange}
                                        />
                                        Small Drink
                                    </label>
                                    {/* <li className='center'><button type='radio'>Small Drink</button></li>*/}
                                </div>
                                <br />

                                {/* med drink */}
                                <div className="radio">
                                    <label>
                                        <input
                                            type="radio"
                                            value="MediumDrink"
                                            checked={this.state.selectedOption === "MediumDrink"}
                                            onChange={this.onValueChange}
                                        />
                                        Medium Drink
                                    </label>
                                    {/* <li className='center'><button type='radio'>Med Drink</button></li>*/}
                                </div>
                                <br />
                                {/* large drink */}
                                <div className="radio">
                                    <label>
                                        <input
                                            type="radio"
                                            value="LargeDrink"
                                            checked={this.state.selectedOption === "LargeDrink"}
                                            onChange={this.onValueChange}
                                        />
                                        Large Drink
                                    </label>
                                    {/* <li className='center'><button type='radio'>Large Drink</button></li>*/}
                                </div>
                                <br />
                            </form>
                            <div className='menuOption'>
                                <h3>For Here? or TO-GO?</h3>
                                <ul className='center'>
                                    {/* In-House! */}
                                    <div className="radio">
                                        <label>
                                            <input
                                                type="radio"
                                                value="InHouse"
                                                checked={this.state.selectedOption === "InHouse"}
                                                onChange={this.onValueChange}
                                            />
                                            In-House!
                                        </label>
                                        {/* <li className='center'><button type='radio'>In-House!</button></li> */}
                                    </div>
                                    <br />

                                    {/* In-House! */}
                                    <div className="radio">
                                        <label>
                                            <input
                                                type="radio"
                                                value="togo"
                                                checked={this.state.selectedOption === "togo"}
                                                onChange={this.onValueChange}
                                            />
                                            On The Road!
                                        </label>
                                        {/* <li className='center'><button type='radio'>On The Road!</button></li> */}
                                    </div>
                                    <br />
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
