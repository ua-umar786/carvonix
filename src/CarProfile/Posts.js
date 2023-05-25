import React, { Component } from 'react';
import './Posts.scss';
import Gallery1 from './img/gallery-img3.jpg';
import Gallery2 from './img/gallery-img2.jpg';

export default class Posts extends Component {
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='posts-row'>
                        <div className='img-holder'>
                            <img src={Gallery1} alt='' />
                        </div>
                        <div className='img-holder'>
                            <img src={Gallery2} alt='' />
                        </div>
                        <div className='img-holder'>
                            <img src={Gallery2} alt='' />
                        </div>
                        <div className='img-holder'>
                            <img src={Gallery2} alt='' />
                        </div>
                        <div className='img-holder'>
                            <img src={Gallery2} alt='' />
                        </div>
                    </div>
                    <div className='load-more'>Load more posts</div>
                </div>
            </div>
        )
    }
}
