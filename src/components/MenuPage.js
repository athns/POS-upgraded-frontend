import React, { Component } from 'react';
import axios from 'axios';
import './MenuPage.css';

import Ghost from './Ghost';

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
                <nav class="navbar is-info">
                    <div class="navbar-brand">
                        <a class="navbar-item" href="#">
                            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"></img>
                        </a>
                        <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div id="navbarExampleTransparentExample" class="navbar-menu">
                        <div class="navbar-start is-link">
                            <a class="navbar-item" href="https://github.com/BulmaTemplates/bulma-templates">
                                Home
                            </a>
                            <div class="navbar-item has-dropdown is-hoverable">
                                <a class="navbar-link" href="/documentation/overview/start/">
                                    Docs
                                </a>
                                <div class="navbar-dropdown is-boxed">
                                    <a class="navbar-item" href="admin.html">
                                        Admin
                                    </a>
                                    <a class="navbar-item" href="forum.html">
                                        Forum
                                    </a>
                                    <a class="navbar-item" href="cover.html">
                                        Cover
                                    </a>
                                    <a class="navbar-item" href="cards.html">
                                        Cards
                                    </a>
                                    <a class="navbar-item" href="blog.html">
                                        Blog
                                    </a>
                                    <hr class="navbar-divider"></hr>
                                        <a class="navbar-item" href="search.html">
                                            Search
                                        </a>
                                        <a class="navbar-item is-active" href="kanban.html">
                                            Kanban
                                        </a>
                                </div>
                            </div>
                        </div>
                        <div class="navbar-end">
                            <div class="navbar-item">
                                <div class="field is-grouped">
                                    <p class="control">
                                        <a class="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="#" target="_blank" href="https://twitter.com/intent/tweet?text=get free bulma templates:;url=https://github.com/BulmaTemplates/bulma-templates">
                                            <span class="icon">
                                                <i class="fab fa-twitter"></i>
                                            </span>
                                            <span>
                                                Tweet
                                            </span>
                                        </a>
                                    </p>
                                    <p class="control">
                                        <a class="button is-primary" href="https://github.com/BulmaTemplates/bulma-templates">
                                            <span class="icon">
                                                <i class="fas fa-download"></i>
                                            </span>
                                            <span>Download</span>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <section class="hero is-info">
                    <div class="hero-body">
                        <div class="container">
                            <h1 class="title">
                                Tabs
                            </h1>
                            <h2 class="subtitle">
                                example
                            </h2>
                        </div>
                    </div>
                    <div class="tabs is-boxed is-centered main-menu" id="nav">
                        <ul>
                            <li data-target="pane-1" id="1">
                                <a>
                                    <span class="icon is-small"><i class="fa fa-image"></i></span>
                                    <span>Pictures</span>
                                </a>
                            </li>
                            <li data-target="pane-2" id="2" class="is-active">
                                <a>
                                    <span class="icon is-small"><i class="fab fa-empire"></i></span>
                                    <span>Article</span>
                                </a>
                            </li>
                            <li data-target="pane-3" id="3">
                                <a>
                                    <span class="icon is-small"><i class="fab fa-superpowers"></i></span>
                                    <span>Team</span>
                                </a>
                            </li>
                            <li data-target="pane-4" id="4">
                                <a>
                                    <span class="icon is-small"><i class="fa fa-film"></i></span>
                                    <span>Video</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="tab-content"></div>
                        <div class="tab-pane" id="pane-1">
                            <figure>
                                <img src="https://source.unsplash.com/0_xMuEbpFAQ/400x400" alt="💯" class="cent"></img>
                            </figure>
                            <figure>
                                <img src="https://source.unsplash.com/wPMvPMD9KBI/800x600" alt="💯" class="cent"></img>
                            </figure>
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
                        <div class="tab-pane" id="pane-4">
                            <div class="columns is-centered">
                                <div class="column is-three-quarters">
                                    <div class="embed-container image">
                                        <iframe src="https://player.vimeo.com/video/261794608" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane is-active" id="pane-2">
                            <div class="content">
                                <h1>Hello World</h1>
                                <p>Lorem ipsum<sup><a>[1]</a></sup> dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque. Sub<sub>script</sub> works as well!</p>
                                <h2>Second level</h2>
                                <p>Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.</p>
                                <ul>
                                    <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
                                    <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
                                    <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
                                    <li>Ut non enim metus.</li>
                                </ul>
                                <h3>Third level</h3>
                                <p>Quisque ante lacus, malesuada ac auctor vitae, congue <a href="#">non ante</a>. Phasellus lacus ex, semper ac tortor nec, fringilla condimentum orci. Fusce eu rutrum tellus.</p>
                                <ol>
                                    <li>Donec blandit a lorem id convallis.</li>
                                    <li>Cras gravida arcu at diam gravida gravida.</li>
                                    <li>Integer in volutpat libero.</li>
                                    <li>Donec a diam tellus.</li>
                                    <li>Aenean nec tortor orci.</li>
                                    <li>Quisque aliquam cursus urna, non bibendum massa viverra eget.</li>
                                    <li>Vivamus maximus ultricies pulvinar.</li>
                                </ol>
                                <blockquote>Ut venenatis, nisl scelerisque sollicitudin fermentum, quam libero hendrerit ipsum, ut blandit est tellus sit amet turpis.</blockquote>
                                <p>Quisque at semper enim, eu hendrerit odio. Etiam auctor nisl et <em>justo sodales</em> elementum. Maecenas ultrices lacus quis neque consectetur, et lobortis nisi molestie.</p>
                                <p>Sed sagittis enim ac tortor maximus rutrum. Nulla facilisi. Donec mattis vulputate risus in luctus. Maecenas vestibulum interdum commodo.</p>
                                <dl>
                                    <dt>Web</dt>
                                    <dd>The part of the Internet that contains websites and web pages</dd>
                                    <dt>HTML</dt>
                                    <dd>A markup language for creating web pages</dd>
                                    <dt>CSS</dt>
                                    <dd>A technology to make HTML look better</dd>
                                </dl>
                                <p>Suspendisse egestas sapien non felis placerat elementum. Morbi tortor nisl, suscipit sed mi sit amet, mollis malesuada nulla. Nulla facilisi. Nullam ac erat ante.</p>
                                <h4>Fourth level</h4>
                                <p>Nulla efficitur eleifend nisi, sit amet bibendum sapien fringilla ac. Mauris euismod metus a tellus laoreet, at elementum ex efficitur.</p>
                                <pre>
                                    &lt;!DOCTYPE html&gt;
                                    &lt;html&gt;
                                    &lt;head&gt;
                                    &lt;title&gt;Hello World&lt;/title&gt;
                                    &lt;/head&gt;
                                    &lt;body&gt;
                                    &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.&lt;/p&gt;
                                    &lt;/body&gt;
                                    &lt;/html&gt;
                                </pre>
                                <p>Maecenas eleifend sollicitudin dui, faucibus sollicitudin augue cursus non. Ut finibus eleifend arcu ut vehicula. Mauris eu est maximus est porta condimentum in eu justo. Nulla id iaculis sapien.</p>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>One</th>
                                            <th>Two</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Three</td>
                                            <td>Four</td>
                                        </tr>
                                        <tr>
                                            <td>Five</td>
                                            <td>Six</td>
                                        </tr>
                                        <tr>
                                            <td>Seven</td>
                                            <td>Eight</td>
                                        </tr>
                                        <tr>
                                            <td>Nine</td>
                                            <td>Ten</td>
                                        </tr>
                                        <tr>
                                            <td>Eleven</td>
                                            <td>Twelve</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p>Phasellus porttitor enim id metus volutpat ultricies. Ut nisi nunc, blandit sed dapibus at, vestibulum in felis. Etiam iaculis lorem ac nibh bibendum rhoncus. Nam interdum efficitur ligula sit amet ullamcorper. Etiam tristique, leo vitae porta faucibus, mi lacus laoreet metus, at cursus leo est vel tellus. Sed ac posuere est. Nunc ultricies nunc neque, vitae ultricies ex sodales quis. Aliquam eu nibh in libero accumsan pulvinar. Nullam nec nisl placerat, pretium metus vel, euismod ipsum. Proin tempor cursus nisl vel condimentum. Nam pharetra varius metus non pellentesque.</p>
                                <h5>Fifth level</h5>
                                <p>Aliquam sagittis rhoncus vulputate. Cras non luctus sem, sed tincidunt ligula. Vestibulum at nunc elit. Praesent aliquet ligula mi, in luctus elit volutpat porta. Phasellus molestie diam vel nisi sodales, a eleifend augue laoreet. Sed nec eleifend justo. Nam et sollicitudin odio.</p>
                                
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