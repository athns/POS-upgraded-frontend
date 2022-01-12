import React, { Component } from 'react';
import axios from 'axios';
import './OptionsContainer.css'

let sandwichOrderArray = []

class SandwichOptions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fries: "",
            soup: "",
            size: "",
        }
        this.onFriesChange = this.onFriesChange.bind(this);
        this.onSoupChange = this.onSoupChange.bind(this);
        this.onSizeChange = this.onSizeChange.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }

    onFriesChange(event) {
        // callback means that the thingy is asyc function and wont happen immediatly
        this.setState({
            fries: event.target.value,
        });
    }

    onSoupChange(event) {
        this.setState({
            soup: event.target.value,
        });
    }
    onSizeChange(event) {
        this.setState({
            size: event.target.value,
        });
        
    }

    formSubmit(event) {
        event.preventDefault();
        sandwichOrderArray.push(this.state.fries);
        sandwichOrderArray.push(this.state.soup);
        sandwichOrderArray.push(this.state.size);
        console.log(sandwichOrderArray);
    }

  

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
                {/* an and opperatior vvvv*/} 
                {/* {this.state.tempval && <span>{this.state.tempval}</span>} */}
                <span className='sideBarRight'></span>
                <span className='sideBarLeft'></span>
                <div className='NavBar'>
                    <h1 className='chosenItem'> Menu Item Chosen </h1>
                </div>
                <div className='optionsContainer'>
                        <div className='menuOption'>
                            {/* friees */}
                            <h3>Side of Fries?</h3>
                            <form onSubmit={this.formSubmit}>
                                <ul className='center'>
                                    {/* small */}
                                    <div className="radio">
                                        <label>
                                            <input
                                                type="radio"
                                                name='form1'
                                                value="SmallFries"
                                                // checked={this.state.fries === "SmallFries"}
                                                onChange={this.onFriesChange}
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
                                                name='form1'
                                                value="MediumFries"
                                                // checked={this.state.fries === "MediumFries"}
                                                onChange={this.onFriesChange}
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
                                                name='form1'
                                                value="LargeFries"
                                                // checked={this.state.fries === "LargeFries"}
                                                onChange={this.onFriesChange}
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
                                                name='form1'
                                                value="SmallChilliCheeseFry"
                                                // checked={this.state.fries === "SmallChilliCheeseFry"}
                                                onChange={this.onFriesChange}
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
                                                name='form1'
                                                value="MediumChilliCheeseFry"
                                                // checked={this.state.fries === "MediumChilliCheeseFry"}
                                                onChange={this.onFriesChange}
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
                                                name='form1'
                                                value="LargeChilliCheeseFry"
                                                // checked={this.state.fries === "LargeChilliCheeseFry"}
                                                onChange={this.onFriesChange}
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
                                <form onSubmit={this.formSubmit}>
                                    <ul className='center'>

                                        {/* tomato */}
                                        <div className="radio">
                                            <label>
                                                <input
                                                    type="radio"
                                                    name='form2'
                                                    value="TomatoeSoup"
                                                    // checked={this.state.selectedOption === "TomatoeSoup"}
                                                    onChange={this.onSoupChange}
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
                                                    name='form2'
                                                    value="ChickenGnochi"
                                                    // checked={this.state.selectedOption === "ChickenGnochi"}
                                                    onChange={this.onSoupChange}
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
                                                    name='form2'
                                                    value="BeefStew"
                                                    // checked={this.state.selectedOption === "BeefStew"}
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
                                                    name='form2'
                                                    value="SoupOftheDay"
                                                    // checked={this.state.selectedOption === "SoupOftheDay"}
                                                    onChange={this.onSoupChange}
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
                                    <form onSubmit={this.formSubmit}>
                                        <ul className='center'>
                                            {/* SotD */}
                                            <div className="radio">
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name='form3'
                                                        value="HalfBowl"
                                                        // checked={this.state.selectedOption === "HalfBowl"}
                                                        onChange={this.onSizeChange}
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
                                                        name='form3'
                                                        value="FullBowl"
                                                        // checked={this.state.selectedOption === "FullBowl"}
                                                        onChange={this.onSizeChange}
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
                        <button onClick={this.formSubmit}>add to cart</button>
                        <a href='/MainMenu' className='buttonClass'>
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
