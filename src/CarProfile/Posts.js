import React, { Component } from 'react';
import './Posts.scss';
import Gallery1 from './img/gallery-img3.jpg';
import Gallery2 from './img/gallery-img2.jpg';

export default class Posts extends Component {
    render() {
        return (
            <div>
                <div className='container'>
                    <h2>Posts</h2>
                    <div className='posts-row'>
                        <div className='img-holder'>
                            <a href='/general-post'>
                                <img src={Gallery1} alt='' />
                            </a>
                        </div>
                        <div className='img-holder'>
                            <a href='/general-post'>
                                <img src={Gallery1} alt='' />
                            </a>
                        </div>
                        <div className='img-holder'>
                            <a href='/general-post'>
                                <img src={Gallery1} alt='' />
                            </a>
                        </div>
                        <div className='img-holder'>
                            <a href='/general-post'>
                                <img src={Gallery1} alt='' />
                            </a>
                        </div>
                        <div className='img-holder'>
                            <a href='/general-post'>
                                <img src={Gallery1} alt='' />
                            </a>
                        </div>
                        <div className='img-holder'>
                            <a href='/general-post'>
                                <img src={Gallery1} alt='' />
                            </a>
                        </div>

                    </div>
                    <div className='load-more'>See All
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.25 8.49984H15.75" stroke="#387AFF" stroke-linecap="round" />
                            <path d="M11.25 12.5L15.75 8.5L11.25 4.5" stroke="#387AFF" stroke-linecap="round" />
                        </svg>
                    </div>
                </div>
            </div>
        )
    }
}
