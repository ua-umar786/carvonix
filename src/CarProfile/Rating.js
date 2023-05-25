import React, { Component } from 'react';
import './Rating.scss';
import ThumbsUp from './img/thumb-up.svg';
import ThumbsDown from './img/thumb-down.svg';
import Chat from './img/chat-alt.svg';
import UserImg from './img/user.png';

export default class Rating extends Component {
    render() {
        return (
            <div>
                <div className='rating-section'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-8'>
                                <h4>Rating</h4>
                                <div className='user-rating'>
                                    <div class="stars">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star-half-stroke"></i>
                                    </div>
                                    <h5>Review title</h5>
                                    <p>Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                                    <div className='d-flex actions-btn'>
                                        <img src={ThumbsUp} />
                                        <img src={ThumbsDown} />
                                        <img src={Chat} />
                                    </div>
                                    <div className='user'>
                                        <img src={UserImg} />
                                        <div>
                                            <h6>Username</h6>
                                            <p>4h ago</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='user-rating'>
                                    <div class="stars">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star-half-stroke"></i>
                                    </div>
                                    <h5>Review title</h5>
                                    <p>Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                                    <div className='d-flex actions-btn'>
                                        <img src={ThumbsUp} />
                                        <img src={ThumbsDown} />
                                        <img src={Chat} />
                                    </div>
                                    <div className='user'>
                                        <img src={UserImg} />
                                        <div>
                                            <h6>Username</h6>
                                            <p>4h ago</p>
                                        </div>
                                    </div>
                                </div>
                                <a href='/' className='d-flex align-items-center'>See all reviews <i class="fa-solid fa-arrow-right mx-2"></i></a>
                            </div>
                            <div className='col-lg-4'>
                                <div className='avg-rating'>
                                    <h3>Average Rating</h3>
                                    <div className='rate-text'>
                                        <h4>4.0</h4>
                                        <div className='info-star'>
                                            <div class="stars">
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star-half-stroke"></i>
                                            </div>
                                            <p className='based'>Based on 278 reviews</p>
                                        </div>
                                    </div>
                                    <div className='rank-bar'>
                                        <div className='name'>
                                            <h5>Positive</h5>
                                            <p>4 stars & above</p>
                                        </div>
                                        <div className='bar 80'>
                                            80%
                                        </div>
                                    </div>
                                    <div className='rank-bar'>
                                        <div className='name'>
                                            <h5>Positive</h5>
                                            <p>4 stars & above</p>
                                        </div>
                                        <div className='bar 80'>
                                            80%
                                        </div>
                                    </div>
                                    <div className='rank-bar'>
                                        <div className='name'>
                                            <h5>Positive</h5>
                                            <p>4 stars & above</p>
                                        </div>
                                        <div className='bar 80'>
                                            80%
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
