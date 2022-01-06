import React, { Component } from 'react';
import axios from 'axios';
import('./OptionsContainer.css');

class OptionsContainer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                {/* This should get the menu item from the menu page  */}
                <h1> Menu Item Name </h1>

                {/* i put the form here to make it make sense lol ask me its 7 am and i didnt sleep */}

                <form action='/MainMenu' method='get'>
                    {/* there should be a display options function that maps the buttons that show up in here */}

                </form>

                {/* It should Map all the options it has for a certain menu item and go through all option stuff  */}
            </div>
        )
    }
}

export default OptionsContainer;