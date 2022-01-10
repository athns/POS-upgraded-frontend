import React, { Component } from 'react';
import axios from 'axios';
import('./LandingPage.css');

class PlaceOrderPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <section class="hero is-info is-fullheight">
                    <div class="hero-head">
                        <nav class="navbar">
                            <div class="container">

                                <div id="navbarMenu" class="navbar-menu">
                                    <div class="navbar-end">

                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>

                    <div class="hero-body">
                        <div class="container has-text-centered">
                            <div class="column is-6 is-offset-3">
                                <h1 class="title">
                                    Your Order is Placed!!
                                </h1>
                                <h2 class="subtitle">
                                </h2>
                                
                                
                            </div>
                        </div>
                    </div>
                    <a href='http://localhost:3000/'>
                        <button type='link'>Welcome! lets get started!</button>
                    </a>

                </section>
                <script async type="text/javascript" src="../js/bulma.js"></script>
            </div>
        );
    };
};

export default PlaceOrderPage;