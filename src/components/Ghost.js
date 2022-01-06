import React, { Component } from 'react';
import axios from 'axios';
import('./Ghost.css');

class Ghost extends Component {
   
    render() {
        return (
            <div>
                
                <div className="columns featured-post is-multiline">
                                <div className="column is-12 post">
                                    <article className="columns featured">
                                        <div className="column is-7 post-img ">
                                            <img src="https://cdn.emk.dev/templates/featured-image.png" alt="" />
                                        </div>
                                        <div className="column is-5 featured-content va">
                                            <div>
                                                <h3 className="heading post-category">Category Name</h3>
                                                <h1 className="title post-title">Blog Posts Template</h1>
                                                <p className="post-excerpt">This template is based off of the official default blog template created by the fine folks over at <a href="https://ghost.io">Ghost</a>. If you are looking for a fully featured blog platform, I highly recommend checking them out!</p>
                                                <br />
                                                <a href="#" className="button is-primary">Read More</a>
                                            </div>

                                        </div>
                                    </article>
                                </div>
                            </div>
            </div>
        );
    }
}

export default Ghost;