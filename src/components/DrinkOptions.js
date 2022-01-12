import React, { Component } from 'react';
import axios from 'axios';
import './OptionsContainer.css'

let orderArray = [];

class DrinkOptions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drinkSize: "",
            house: ""
        }
        this.onSizeChange = this.onSizeChange.bind(this);
        this.onHouseChange = this.onHouseChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    onSizeChange(event) {
        this.setState({
            drinkSize: event.target.value
        });
        // console.log(event.target.value)
        // console.log(this.state.drinkSize,"asdasadaasasd")

    }
    onHouseChange(event) {
        this.setState({
            house: event.target.value
        });
    }

    submit(event) {
        event.preventDefault();
        orderArray.push(this.state.drinkSize);
        orderArray.push(this.state.house);
        console.log(orderArray);
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
                        <h3>What size would you like?</h3>
                        <form onSubmit={this.submit}>

                            {/* small drink */}
                            <div className="radio">
                                <label>
                                    <input
                                        type="radio"
                                        name="form1"
                                        value="SmallDrink"
                                        // checked={this.state.selectedOption === "SmallDrink"}
                                        onChange={this.onSizeChange}
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
                                        name="form1"
                                        value="MediumDrink"
                                        // checked={this.state.selectedOption === "MediumDrink"}
                                        onChange={this.onSizeChange}
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
                                        name="form1"
                                        value="LargeDrink"
                                        // checked={this.state.selectedOption === "LargeDrink"}
                                        onChange={this.onSizeChange}
                                    />
                                    Large Drink
                                </label>
                                {/* <li className='center'><button type='radio'>Large Drink</button></li>*/}
                            </div>
                            <br />
                        </form>
                        <form onSubmit={this.submit}>
                            <div className='menuOption'>
                                <h3>For Here? or TO-GO?</h3>
                                <ul className='center'>
                                    {/* In-House! */}
                                    <div className="radio">
                                        <label>
                                            <input
                                                type="radio"
                                                name="form2"
                                                value="InHouse"
                                                // checked={this.state.selectedOption2 === "InHouse"}
                                                onChange={this.onHouseChange}
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
                                                name="form2"
                                                value="togo"
                                                // checked={this.state.selectedOption2 === "togo"}
                                                onChange={this.onHouseChange}
                                            />
                                            On The Road!
                                        </label>
                                        {/* <li className='center'><button type='radio'>On The Road!</button></li> */}
                                    </div>
                                    <br />
                                </ul>
                            </div>
                        </form>

                    </div>
                    <button onClick={this.submit}>add to cart</button>
                    <a href='/MainMenu' className='buttonClass'>
                        <button type='submit'>Place Your Order!</button>
                    </a>
                    <a href='/MainMenu' className='buttonClass'>
                        <button type='submit'>Order More!</button>
                    </a>
                </div>



            </div>

        )
    }
}

export default DrinkOptions;

function placeOrder() {

}
