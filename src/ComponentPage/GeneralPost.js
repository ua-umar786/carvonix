import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SliderImg from './img/borla.jpg';
import './PartsSlider.scss';
import './HowToInstall.scss';
import './GeneralPost.scss';


export default class GeneralPost extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
                <div className='post-title general-post-header'>
                    <div>
                        <div className='avtar-in'>
                            <img src={SliderImg} alt="" className='main-img' />
                            <div>
                                <div className='name'>Username</div>
                                <div className='d-flex align-items-center'>4h ago</div>
                            </div>
                        </div>
                    </div>
                    <button className='follow-btn'>Follow</button>
                </div>

                <img src={SliderImg} alt="" className='post-img' />

                <p className='pt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>

                <div className='actions-btns'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.48149 7.43827C8.17078 7.80075 8 8.26243 8 8.73985V17C8 18.1046 8.89543 19 10 19H17.3308C18.2974 19 19.1257 18.3088 19.2986 17.3578L20.5713 10.3578C20.7945 9.13009 19.8514 8 18.6036 8H14L15.6279 3.11634C15.8414 2.47579 15.5514 1.77571 14.9475 1.47375V1.47375C14.3906 1.19532 13.7158 1.33161 13.3106 1.80431L8.48149 7.43827Z" stroke="white" />
                        <path d="M4 18V9" stroke="white" stroke-linecap="round" />
                    </svg>
                    <span>4</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5185 16.5617C15.8292 16.1992 16 15.7376 16 15.2602L16 7C16 5.89543 15.1046 5 14 5H6.66915C5.70258 5 4.87432 5.69125 4.70141 6.64223L3.42869 13.6422C3.20547 14.8699 4.14862 16 5.39643 16H10L8.37211 20.8837C8.1586 21.5242 8.44858 22.2243 9.0525 22.5262V22.5262C9.60935 22.8047 10.2842 22.6684 10.6894 22.1957L15.5185 16.5617Z" stroke="white" />
                        <path d="M20 6V15" stroke="white" stroke-linecap="round" />
                    </svg>
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.916 12.9997L19.2493 12.9997" stroke="white" stroke-linecap="round" />
                        <path d="M17.166 9.875L20.291 13L17.166 16.125" stroke="white" stroke-linecap="round" />
                        <path d="M15.084 5.70801L7.75065 5.70801C7.19837 5.70801 6.75065 6.15572 6.75065 6.70801L6.75065 19.2913C6.75065 19.8436 7.19837 20.2913 7.75065 20.2913L15.084 20.2913" stroke="white" stroke-linecap="round" />
                    </svg>

                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.25 8.32352V24.4822L15.5364 20.8507C15.2091 20.6426 14.7909 20.6426 14.4636 20.8507L8.75 24.4822L8.75 8.32352C8.75 6.48799 10.1491 5 11.875 5L18.125 5C19.8509 5 21.25 6.48799 21.25 8.32352Z" stroke="white" stroke-linecap="round" />
                    </svg>
                </div>

                <div className='comments-wrapper'>
                    <div className='comment-box'>
                        <textarea placeholder='Add a comment...'></textarea>
                        <button>Comment</button>
                    </div>
                    <div className='comment-text'>
                        <div className='avtar-in'>
                            <img src={SliderImg} alt="" className='main-img' />
                            <div>
                                <div className='name'>Username</div>
                                <div className='d-flex align-items-center'>4h ago</div>
                            </div>
                        </div>
                        <div className='user-text'>
                            <p>Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                            <div className='actions-btns'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.48149 7.43827C8.17078 7.80075 8 8.26243 8 8.73985V17C8 18.1046 8.89543 19 10 19H17.3308C18.2974 19 19.1257 18.3088 19.2986 17.3578L20.5713 10.3578C20.7945 9.13009 19.8514 8 18.6036 8H14L15.6279 3.11634C15.8414 2.47579 15.5514 1.77571 14.9475 1.47375V1.47375C14.3906 1.19532 13.7158 1.33161 13.3106 1.80431L8.48149 7.43827Z" stroke="white" />
                                    <path d="M4 18V9" stroke="white" stroke-linecap="round" />
                                </svg>
                                <span>4</span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5185 16.5617C15.8292 16.1992 16 15.7376 16 15.2602L16 7C16 5.89543 15.1046 5 14 5H6.66915C5.70258 5 4.87432 5.69125 4.70141 6.64223L3.42869 13.6422C3.20547 14.8699 4.14862 16 5.39643 16H10L8.37211 20.8837C8.1586 21.5242 8.44858 22.2243 9.0525 22.5262V22.5262C9.60935 22.8047 10.2842 22.6684 10.6894 22.1957L15.5185 16.5617Z" stroke="white" />
                                    <path d="M20 6V15" stroke="white" stroke-linecap="round" />
                                </svg>
                                <span className='pointer'>Reply</span>
                            </div>
                            <div className='view-reply'>View replies</div>

                            <div className='reply'>
                                <div className='avtar-in mt-4'>
                                    <img src={SliderImg} alt="" className='main-img' />
                                    <div>
                                        <div className='name'>Username</div>
                                        <div className='d-flex align-items-center'>4h ago</div>
                                    </div>
                                </div>
                                <p>Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                            </div>

                        </div>
                    </div>

                    <div className='show-more-comments'>Show more comments</div>

                </div>

            </div>
        )
    }
}
