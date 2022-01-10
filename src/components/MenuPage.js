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


import Ghost from './Ghost';
let currentSeat = 1;
function addTableNumber() {

}

const data = [
    {
      catagory: 'Drink'
    },
    {
        catagory: 'Sandwich'
    },
    {
        catagory: 'Desert'
    },
]


const displayCharacters = data.map((a, idx) =>{
    return (
        <>
        <div className="tab-pane is-active" id="pane-2">
                        <div className="content">
                            <div className="columns featured-post is-multiline">
                                <div className="column is-12 post">
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
                                                <a href="#" className="button is-primary">Read More</a>
                                            </div>

                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='menuFlex'>
                        <a className='menuItem'>
                            <img src='/Users/huntermcguire/Desktop/SEI-1025/UNIT-3/deliverables/POS-upgraded-frontend/src/img/StevenUniverse-CoverPhoto-scaled.jpeg'></img>
                        </a>
                        <a className='menuItem'>
                            <img src='/Users/huntermcguire/Desktop/SEI-1025/UNIT-3/deliverables/POS-upgraded-frontend/src/img/StevenUniverse-CoverPhoto-scaled.jpeg'></img>
                        </a>
                        <a className='menuItem'>
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

    // this is for the ghost display thingy

    displayGhost() {

    }

    ///// YOOOO THIS IS THE CHANGE!!!!!!!!~~~~~~~~~~??????????ß
    render() {
        return (
            <>
                <nav className="navbar is-info">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="#">
                            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"></img>
                        </a>
                        <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div id="navbarExampleTransparentExample" className="navbar-menu">
                        <div className="navbar-start is-link">
                            <a className="navbar-item" href="https://github.com/BulmaTemplates/bulma-templates">
                                Home
                            </a>
                            <div className="navbar-item has-dropdown is-hoverable">
                                <a className="navbar-link" href="/documentation/overview/start/">
                                    Docs
                                </a>
                                <div className="navbar-dropdown is-boxed">
                                    <a className="navbar-item" href="admin.html">
                                        Admin
                                    </a>
                                    <a className="navbar-item" href="forum.html">
                                        Forum
                                    </a>
                                    <a className="navbar-item" href="cover.html">
                                        Cover
                                    </a>
                                    <a className="navbar-item" href="cards.html">
                                        Cards
                                    </a>
                                    <a className="navbar-item" href="blog.html">
                                        Blog
                                    </a>
                                    <hr className="navbar-divider"></hr>
                                    <a className="navbar-item" href="search.html">
                                        Search
                                    </a>
                                    <a className="navbar-item is-active" href="kanban.html">
                                        Kanban
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="navbar-end">
                            <div className="navbar-item">
                                <div className="field is-grouped">
                                    <p className="control">
                                        <a className="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="#" target="_blank" href="https://twitter.com/intent/tweet?text=get free bulma templates:;url=https://github.com/BulmaTemplates/bulma-templates">
                                            <span className="icon">
                                                <i className="fab fa-twitter"></i>
                                            </span>
                                            <span>
                                                Tweet
                                            </span>
                                        </a>
                                    </p>
                                    <p className="control">
                                        <a className="button is-primary" href="https://github.com/BulmaTemplates/bulma-templates">
                                            <span className="icon">
                                                <i className="fas fa-download"></i>
                                            </span>
                                            <span>Download</span>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <section className="main-image">
                    <div className="hero-body"></div>

                <section className="hero is-info">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">
                                Tabs
                            </h1>
                            <h2 className="subtitle">
                                example
                            </h2>
                        </div>
                    </div>
                    <div className="tabs is-boxed is-centered main-menu" id="nav">
                        <ul>
                            <li data-target="pane-1" id="1">
                                <a>
                                    <span className="icon is-small"><i className="fa fa-image"></i></span>
                                    <span>Pictures</span>
                                </a>
                            </li>
                            <li data-target="pane-2" id="2" className="is-active">
                                <a>
                                    <span className="icon is-small"><i className="fab fa-empire"></i></span>
                                    <span>Article</span>
                                </a>
                            </li>
                            <li data-target="pane-3" id="3">
                                <a>
                                    <span className="icon is-small"><i className="fab fa-superpowers"></i></span>
                                    <span>Team</span>
                                </a>
                            </li>
                            <li data-target="pane-4" id="4">
                                <a>
                                    <span className="icon is-small"><i className="fa fa-film"></i></span>
                                    <span>Video</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="tab-content"></div>
                    <div className="tab-pane" id="pane-1">
                        <figure>
                            <img src="https://source.unsplash.com/0_xMuEbpFAQ/400x400" alt="💯" className="cent"></img>
                        </figure>
                        <figure>
                            <img src="https://source.unsplash.com/wPMvPMD9KBI/800x600" alt="💯" className="cent"></img>
                        </figure>
                    </div>
                    <div className="tab-pane" id="pane-3">
                        <div className="columns">
                            <div className="container">
                                <div className="columns">
                                    <div className="column">
                                        <article className="media">
                                            <div className="media-left">
                                                <i className="fab fa-github-square fa-4x"></i>
                                            </div>
                                            <div className="media-content">
                                                <div className="content">
                                                    <p>
                                                        <strong>Dominic Ipsum</strong>
                                                        <br></br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                                                    </p>
                                                </div>
                                            </div>
                                        </article>
                                        <article className="media">
                                            <div className="media-left">
                                                <i className="fab fa-empire fa-4x"></i>
                                            </div>
                                            <div className="media-content">
                                                <div className="content">
                                                    <p>
                                                        <strong>Cassie Ipsum</strong>
                                                        <br></br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                                                    </p>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                    <div className="column">
                                        <article className="media">
                                            <div className="media-left">
                                                <i className="fab fa-ravelry fa-4x"></i>
                                            </div>
                                            <div className="media-content">
                                                <div className="content">
                                                    <p>
                                                        <strong>Avery Ipsum</strong>
                                                        <br></br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                                                    </p>
                                                </div>
                                            </div>
                                        </article>
                                        <article className="media">
                                            <div className="media-left">
                                                <i className="fab fa-github-alt fa-4x"></i>
                                            </div>
                                            <div className="media-content">
                                                <div className="content">
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
                    <div className="tab-pane" id="pane-4">
                        <div className="columns is-centered">
                            <div className="column is-three-quarters">
                                <div className="embed-container image">
                                    <iframe src="https://player.vimeo.com/video/261794608" frameBorder="0" webkitallowfullscreen='true' mozallowfullscreen='true' allowFullScreen></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {displayCharacters}

                </section>
                {<script src="../js/bulma.js"></script>}
                {<script src="../js/tabs.js"></script>}
            </>
        );
    }
}

export default MenuPage;