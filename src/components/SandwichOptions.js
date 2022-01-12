import React, { Component } from 'react';
import axios from 'axios';
import './OptionsContainer.css'

let sandwichOderArray = [];

class SandwichOptions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
        this.onValueChange = this.onValueChange.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }

    onValueChange(event) {
        this.setState({
            selectedOption: event.target.value
        });
    }

    friesFormSubmit(event) {
        event.preventDefault();
        console.log(this.state.selectedOption)
    }

    soupFormSubmit(event) {
        event.preventDefault();
        console.log(this.state.selectedOption)
    }

    sizeFormSubmit(event) {
        event.preventDefault();
        console.log(this.state.selectedOption)
    }

    /**
     * 
     * @returns i think this didnt really work out too well
     */

    // handleChange(event) {
    //     // ===== prevents the webpage from restarting everytime you click
    //     event.preventDefault();
    //     // ===== gets the event aka click button and sends in a value declared at that time
    //     const { name, value } = event.target; // i dont know why name is there but it didnt work without it
    //     // ===== appeneds new value in to array
    //     this.setState({ [name]: value === "smallFries"  ? "smallFries" : ""});

    //     console.log("thingngny", this.state.option = value);

    // }

    //     <label>
    //     <input
    //         className='center'
    //         type="radio"
    //         name="size"
    //         value="smallFries"
    //         checked={this.state.sandwichOderArray === "smallFries"}
    //         onChange={this.handleChange}
    //     />{" "}
    //     Small Fries
    // </label>

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
                            {/* friees */}
                            <h3>Side of Fries?</h3>
                            <form onSubmit={this.friesFormSubmit}>
                                <ul className='center'>
                                    {/* small */}
                                    <div className="radio">
                                        <label>
                                            <input
                                                type="radio"
                                                value="SmallFries"
                                                checked={this.state.selectedOption === "SmallFries"}
                                                onChange={this.onValueChange}
                                            />
                                            Small Fries
                                        </label>
                                        {/* <li className='center'><button type='radio'>Small Fries</button></li> */}
                                    </div>
                                    <br />
                                    {/* med */}
                                    <div className="radio">
                                        <label>
                                            <input
                                                type="radio"
                                                value="MediumFries"
                                                checked={this.state.selectedOption === "MediumFries"}
                                                onChange={this.onValueChange}
                                            />
                                            Medium Fries
                                        </label>
                                        {/* <li className='center'><button type='radio'>Medium Fries</button></li> */}
                                    </div>
                                    <br />
                                    {/* large */}
                                    <div className="radio">
                                        <label>
                                            <input
                                                type="radio"
                                                value="LargeFries"
                                                checked={this.state.selectedOption === "LargeFries"}
                                                onChange={this.onValueChange}
                                            />
                                            Large Fries
                                        </label>
                                        {/* <li className='center'><button type='radio'>Large Fries</button></li>*/}
                                    </div>
                                    <br />
                                    {/* small chilli */}
                                    <div className="radio">
                                        <label>
                                            <input
                                                type="radio"
                                                value="SmallChilliCheeseFry"
                                                checked={this.state.selectedOption === "SmallChilliCheeseFry"}
                                                onChange={this.onValueChange}
                                            />
                                            Small Chilli Cheese Fry
                                        </label>
                                        {/* <li className='center'><button type='radio'>Small Chilli Cheese Fry</button></li>*/}
                                    </div>
                                    <br />
                                    {/* Med Chilli */}
                                    <div className="radio">
                                        <label>
                                            <input
                                                type="radio"
                                                value="MediumChilliCheeseFry"
                                                checked={this.state.selectedOption === "MediumChilliCheeseFry"}
                                                onChange={this.onValueChange}
                                            />
                                            Medium Chilli Cheese Fry
                                        </label>
                                        {/*<li className='center'><button type='radio'>Medium Chilli Cheese Fry</button></li>*/}
                                    </div>
                                    <br />
                                    {/* Large chilli */}
                                    <div className="radio">
                                        <label>
                                            <input
                                                type="radio"
                                                value="LargeChilliCheeseFry"
                                                checked={this.state.selectedOption === "LargeChilliCheeseFry"}
                                                onChange={this.onValueChange}
                                            />
                                            Large Chilli Cheese Fry
                                        </label>
                                        {/*<li className='center'><button type='radio'>Large Chilli Cheese Fry</button></li>*/}
                                    </div>
                                    <br />
                                </ul>
                            </form>

                            {/* soup */}
                            <div className='menuOption'>
                                <h3>Side Soup</h3>
                                <form onSubmit={this.soupFormSubmit}>
                                    <ul className='center'>

                                        {/* tomato */}
                                        <div className="radio">
                                            <label>
                                                <input
                                                    type="radio"
                                                    value="TomatoeSoup"
                                                    checked={this.state.selectedOption === "TomatoeSoup"}
                                                    onChange={this.onValueChange}
                                                />
                                                Tomatoe Soup
                                            </label>
                                            {/* <li className='center'><button type='radio'>Tomatoe Soup</button></li> */}
                                        </div>
                                        <br />

                                        {/* Chicken Gnochi */}
                                        <div className="radio">
                                            <label>
                                                <input
                                                    type="radio"
                                                    value="ChickenGnochi"
                                                    checked={this.state.selectedOption === "ChickenGnochi"}
                                                    onChange={this.onValueChange}
                                                />
                                                Chicken Gnochi
                                            </label>
                                            {/* <li className='center'><button type='radio'>Chicken Gnochi</button></li> */}
                                        </div>
                                        <br />

                                        {/* Beef Stew */}
                                        <div className="radio">
                                            <label>
                                                <input
                                                    type="radio"
                                                    value="BeefStew"
                                                    checked={this.state.selectedOption === "BeefStew"}
                                                    onChange={this.onValueChange}
                                                />
                                                Beef Stew
                                            </label>
                                            {/* <li className='center'><button type='radio'>Beef Stew</button></li> */}
                                        </div>
                                        <br />

                                        {/* SotD */}
                                        <div className="radio">
                                            <label>
                                                <input
                                                    type="radio"
                                                    value="SoupOftheDay"
                                                    checked={this.state.selectedOption === "SoupOftheDay"}
                                                    onChange={this.onValueChange}
                                                />
                                                Soup Of the Day
                                            </label>
                                            {/* <li className='center'><button type='radio'>Soup Of the Day</button></li> */}
                                        </div>
                                        <br />
                                    </ul>
                                </form>

                                <div className='menuOption'>
                                    <h3>Soup Size</h3>
                                    <form onSubmit={this.sizeFormSubmit}>
                                        <ul className='center'>
                                            {/* SotD */}
                                        <div className="radio">
                                            <label>
                                                <input
                                                    type="radio"
                                                    value="HalfBowl"
                                                    checked={this.state.selectedOption === "HalfBowl"}
                                                    onChange={this.onValueChange}
                                                />
                                                Half Bowl
                                            </label>
                                            {/* <li className='center'><button type='radio'>Half Bowl</button></li> */}
                                        </div>
                                        <br />
                                        {/* SotD */}
                                        <div className="radio">
                                            <label>
                                                <input
                                                    type="radio"
                                                    value="FullBowl"
                                                    checked={this.state.selectedOption === "FullBowl"}
                                                    onChange={this.onValueChange}
                                                />
                                                Full Bowl
                                            </label>
                                            {/* <li className='center'><button type='radio'>Full Bowl</button></li> */}
                                        </div>
                                        </ul>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/* <a href='http://localhost:3000/MainMenu' className='buttonClass'>
                            <button type='submit'>Place Your Order!</button>
                        </a> */}
                    </form>
                        <a href='http://localhost:3000/MainMenu' className='buttonClass'>
                            <button type='submit'>Order More!</button>
                        </a>
                </div>
            </div>
        )
    }
}
export default SandwichOptions;
function placeOrder() {

}
