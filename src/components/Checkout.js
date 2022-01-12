import React, { Component } from "react";
import './Checkout.css';

class Checkout extends Component {
    render() {
        return (
            <>
            <nav className="navbar no-hover" role="navigation" aria-label="main navigation">
                    <div id="navbarBasicExample" className="navbar-menu">
                        <div className="restaurant-middle navbar-item navbar-center">
                            <h1 className='res-name'>Rising Bistro</h1>
                        </div>
                        <div className="navbar-end">
                            <div className="navbar-item">
                                <div className="order-buttons">
                                    <p className="seat-number">
                                        <span>
                                            Seat Number: 35
                                        </span>
                                    </p>
                                    <p className="order-total">
                                        <span>
                                            Order Total : $75.90
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <section className="container">
                    <div className="columns is-multiline">
                        <div className="column is-8 is-offset-2 register">
                            <div className="columns">
                                <div className="column left">
                                    <h1 className="order-details">Order Details</h1>
                                    <hr className="space"/>
                                    <h2 className="subtitle colored is-4"></h2>
                                    <p id="menu-items">Mediterranean Sandwich (x2) | $45.00</p>
                                    <p id="menu-items">Apple Juice (x2) | $13.00</p>
                                    <p id="menu-items">Vanilla Ice-cream (x2) | $27.00</p>
                                </div>
                                <div className="column right has-text-centered">
                                    <h1 className="pay">Ready to Pay?</h1>
                                    <h3 className="order-total2">Order Total</h3>
                                    <p className="total">$85</p>
                                    <form>
                                        <button className="button is-block is-primary is-fullwidth is-medium">Pay Now</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="column is-8 is-offset-2">
                            <br />
                            <nav className="level">
                            </nav>
                        </div>
                    </div>
                </section>
                
            </>

        );
    }
}

export default Checkout;