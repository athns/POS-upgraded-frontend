import React, { Component } from 'react';
import './MenuPage.css';

class MenuPage extends Component {
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
                                            Seat Number :
                                        </span>
                                    </p>
                                    <p className="order-total">
                                        <span>
                                            Order Total : $
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <section className="main-image">
                    <div className="hero-body"></div>
                </section>
                <script src="../js/bulma.js"></script>
                <script src="../js/tabs.js"></script>
            </>
        );
    }
}

export default MenuPage;