import React, { Component } from 'react';
import axios from 'axios';
import './MenuPage.css';


import Ghost from './Ghost';
let currentSeat = 1;
function addTableNumber() {

}

const data = [
    {
        catagory: 'Drink',
        link: 'https://pos-upgraded-frontend.herokuapp.com/drinkOptions',
        drinkImageOne: '',
        drinkImageTwo: '',
        drinkImageThree: '',
        drinkImageFour: '',
    },
    {
        catagory: 'Sandwich',
        link: 'https://pos-upgraded-frontend.herokuapp.com/sandwichOptions',
        drinkImageOne: '',
        drinkImageTwo: '',
        drinkImageThree: '',
        drinkImageFour: '',
    },
    {
        catagory: 'Desert',
        link: 'https://pos-upgraded-frontend.herokuapp.com/desertOptions',
        drinkImageOne: '',
        drinkImageTwo: '',
        drinkImageThree: '',
        drinkImageFour: '',
    }
]


const displayCharacters = data.map((a, idx) => {
    return (
        <>
            <div className=" tab-pane is-active" id="pane-2">
                <div className="content">
                    <div className="columns featured-post is-multiline">
                        <div className="spaceTab column is-12 post">
                            <article className="columns featured">
                                <div className="column is-7 post-img ">
                                    <img src="https://cdn.emk.dev/templates/featured-image.png" alt="" />
                                </div>
                                <div className="column is-5 featured-content va">
                                    <div>
                                        <h3 className="" id='color'>{a.catagory}</h3>
                                        <h1 className="title post-title">Menu Item!</h1>
                                        <p className="post-excerpt">Description! here is some really gud food! eat up! <a href="https://ghost.io">Ghost</a>. </p>
                                        <br />
                                        <a href={a.link} className="button is-primary">Customize your order!</a>
                                    </div>

                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
            <div className='menuFlex'>
                <a href={a.link} className='menuItem'>
                    <img src='/Users/huntermcguire/Desktop/SEI-1025/UNIT-3/deliverables/POS-upgraded-frontend/src/img/StevenUniverse-CoverPhoto-scaled.jpeg'></img>
                </a>
                <a href={a.link} className='menuItem'>
                    <img src='/Users/huntermcguire/Desktop/SEI-1025/UNIT-3/deliverables/POS-upgraded-frontend/src/img/StevenUniverse-CoverPhoto-scaled.jpeg'></img>
                </a>
                <a href={a.link} className='menuItem'>
                    <img src='/Users/huntermcguire/Desktop/SEI-1025/UNIT-3/deliverables/POS-upgraded-frontend/src/img/StevenUniverse-CoverPhoto-scaled.jpeg'></img>
                </a>
            </div>
        </>
    );

});



class MenuPage extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        axios.get('http://localhost:3000/foods')
            .then((response) => {
                // response.JSON()
            console.log(response.data);  // { foodArray: [ {}, {}, {} ] }
            const foodArray = response.data.foodArray;
            // TODO:
            // - store foodArray in state
            // - make a function to display foodItems (returns an array of jsx)
            // - 

            })
            .then(foodArray => {
                this.setState({items: foodArray})
            
            })
            .catch((error) => {
                console.log('error hitting api', error);
            })
    }

    render() {
        return (
            <>
                <nav className="navbar no-hover" role="navigation" aria-label="main navigation">
                    <div id="navbarBasicExample" className="navbar-menu">
                        <div className="navbar-item navbar-center">
                            <h1 className='res-name'>Welcome!</h1>
                            <p> Place your order Below!</p>
                        </div>
                        <div className="navbar-end">
                            <div className=" totalDiv navbar-item">
                                <div className="totalDiv order-buttons">
                                    <span className='totalDiv'>
                                        Order Total : $
                                    </span>

                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                <script src="../js/bulma.js"></script>
                <script src="../js/tabs.js"></script>
                <section className="hero is-info">
                        {/* <div className=" tab-pane is-active" id="pane-2">
                            <div className="content">
                                <div className="columns featured-post is-multiline">
                                    <div className="spaceTab column is-12 post">
                                        <article className="columns featured">
                                            <div className="column is-7 post-img ">
                                                <img src="https://cdn.emk.dev/templates/featured-image.png" alt="" />
                                            </div>
                                            <div className="column is-5 featured-content va">
                                                <div>
                                                    <h3 className="" id='color'></h3>
                                                    <h1 className="title post-title">Menu Item!</h1>
                                                    <p className="post-excerpt">Description! here is some really gud food! eat up! <a href="https://ghost.io">Ghost</a>. </p>
                                                    <br />
                                                    <a href='' className="button is-primary">Customize your order!</a>
                                                </div>

                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='menuFlex'>
                            <a href='' className='menuItem'>
                                <img src='/Users/huntermcguire/Desktop/SEI-1025/UNIT-3/deliverables/POS-upgraded-frontend/src/img/StevenUniverse-CoverPhoto-scaled.jpeg'></img>
                                {this.state[1].description.map((menuItem) => (<p>Hello</p>))}
                            </a>
                            <a href='' className='menuItem'>
                                <img src='/Users/huntermcguire/Desktop/SEI-1025/UNIT-3/deliverables/POS-upgraded-frontend/src/img/StevenUniverse-CoverPhoto-scaled.jpeg'></img>
                            </a>
                            <a href='' className='menuItem'>
                                <img src='/Users/huntermcguire/Desktop/SEI-1025/UNIT-3/deliverables/POS-upgraded-frontend/src/img/StevenUniverse-CoverPhoto-scaled.jpeg'></img>
                            </a>
                        </div> */}
                        {displayCharacters}


                </section>
                {/* {<script src="../js/bulma.js"></script>}
                {<script src="../js/tabs.js"></script>} */}

            </>
        );
    }
}


export default MenuPage;