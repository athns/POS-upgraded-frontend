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

                {/* i put the form here to make it make sense lol ask me its 7 am and i didnt sleep */}

                <form action='/MainMenu' method='get'>
                    {/* there should be a display options function that maps the buttons that show up in here */}
                    <div className="radio">
                        <label>
                            <input type="radio" value="option1" checked={false} />
                            {/* change this to what ever the option is  */}
                            Option 1
                        </label>
                    </div>
                </form>

                {/* It should Map all the options it has for a certain menu item and go through all option stuff  */}
            </div>
        )
    }
}

export default OptionsContainer;