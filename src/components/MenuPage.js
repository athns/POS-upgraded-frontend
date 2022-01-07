import React, { Component } from 'react';
import axios from 'axios';
import './MenuPage.css';

class MenuPage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <div className="main-navbar">
                    <div>
                        <h1 className='restaurant-name'>Restaurant Name</h1>
                    </div>
                    <div class="navbar-item">
                        <div class="order-buttons">
                            <p class="seat-number">
                                <span>
                                    Seat Number :
                                </span>
                            </p>
                            <p class="order-total">
                                <span>
                                    Order Total : $
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <section class="main-image">
                    <div class="hero-body"></div>
                    <div class="tabs is-boxed is-centered main-menu" id="nav">
                        <ul>
                            <li data-target="pane-1" id="1">
                                <a href='#'>
                                    <span>Drink</span>
                                </a>
                            </li>
                            <li data-target="pane-2" id="2" class="is-active">
                                <a href='#'>
                                    <span>Eat</span>
                                </a>
                            </li>
                            <li data-target="pane-3" id="3">
                                <a href='#'>
                                    <span>Desert</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="tab-pane" id="pane-3">
                        <div class="columns">
                            <div class="container">
                                <div class="columns">
                                    <div class="column">
                                        <article class="media">
                                            <div class="media-left">
                                                <i class="fab fa-github-square fa-4x"></i>
                                            </div>
                                            <div class="media-content">
                                                <div class="content">
                                                    <p>
                                                        <strong>Dominic Ipsum</strong>
                                                        <br></br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                                                    </p>
                                                </div>
                                            </div>
                                        </article>
                                        <article class="media">
                                            <div class="media-left">
                                                <i class="fab fa-empire fa-4x"></i>
                                            </div>
                                            <div class="media-content">
                                                <div class="content">
                                                    <p>
                                                        <strong>Cassie Ipsum</strong>
                                                        <br></br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                                                    </p>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                    <div class="column">
                                        <article class="media">
                                            <div class="media-left">
                                                <i class="fab fa-ravelry fa-4x"></i>
                                            </div>
                                            <div class="media-content">
                                                <div class="content">
                                                    <p>
                                                        <strong>Avery Ipsum</strong>
                                                        <br></br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                                                    </p>
                                                </div>
                                            </div>
                                        </article>
                                        <article class="media">
                                            <div class="media-left">
                                                <i class="fab fa-github-alt fa-4x"></i>
                                            </div>
                                            <div class="media-content">
                                                <div class="content">
                                                    <p>
                                                        <strong>io Ipsum</strong>
                                                        <br></br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis. ╳
                                                    </p>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <script src="../js/bulma.js"></script>
                <script src="../js/tabs.js"></script>
            </>
        );
    }
}

export default MenuPage;