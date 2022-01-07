import React, { Component } from 'react';
import axios from 'axios';
import('./OptionsContainer.css');

class Options extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                {/* this should get repeated over and over till the menu has no more */}
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <form>
                                <div className="radio">
                                    <label>
                                        <input type="radio" value="option1" checked={false} />
                                        {/* change this to what ever the option is  */}
                                         Option 1
                                    </label>
                                </div>
                                <br />
                                <div className="radio">
                                    <label>
                                        <input type="radio" value="option1" checked={false} />
                                        {/* change this to what ever the option is  */}
                                        Option 1
                                    </label>
                                </div>
                                <br />
                                <div className="radio">
                                    <label>
                                        <input type="radio" value="option1" checked={false} />
                                        {/* change this to what ever the option is  */}
                                        Option 1
                                    </label>
                                </div>
                                <br />
                                <div className="radio">
                                    <label>
                                        <input type="radio" value="option1" checked={false} />
                                        {/* change this to what ever the option is  */}
                                        Option 1
                                    </label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>

        )
    }
}

export default Options;