import React, { Component } from 'react';
import axios from 'axios';
import('./LandingPage.css');

class LandingPage extends Component {
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
                                    Enter Your Party Number!!
                                </h1>
                                <h2 class="subtitle">
                                </h2>
                                <form>
                                    <div class="box">
                                        <div class="field is-grouped">
                                            <p class="control is-expanded">
                                                <input class="input" type="Number" placeholder="Enter Your Table Code"></input>
                                            </p>

                                        </div>
                                    </div>
                                </form>
                                    <div class='orderStart'>
                                        <a href='https://pos-upgraded-frontend.herokuapp.com/MainMenu'>
                                            <button type="submit">Start Your Order!</button>

                                        </a>
                                    </div>
                                <a href="https://pos-upgraded-frontend.herokuapp.com/signup">
                                    <button>Sign Up!</button>
                                </a>

                            </div>
                        </div>
                    </div>

                </section>
                <script async type="text/javascript" src="../js/bulma.js"></script>
            </div>
        );
    };
};

export default LandingPage;