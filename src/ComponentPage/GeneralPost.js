import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SliderImg from './img/borla.jpg';
import UserProfile from './UserProfile';
import Header from '../FrontPage/header';
import Footer from '../FrontPage/Footer';
import ProfileSideBar from './ProfileSideBar';
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
                <Header />
                <div className='page-container'>
                    <ProfileSideBar />
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
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M21 17V17.5C21.2761 17.5 21.5 17.2761 21.5 17H21ZM21 4H21.5C21.5 3.72386 21.2761 3.5 21 3.5V4ZM13 17V16.5C12.9013 16.5 12.8048 16.5292 12.7226 16.584L13 17ZM7 21H6.5C6.5 21.1844 6.60149 21.3538 6.76407 21.4408C6.92665 21.5278 7.12392 21.5183 7.27735 21.416L7 21ZM7 17H7.5C7.5 16.7239 7.27614 16.5 7 16.5V17ZM3 17H2.5C2.5 17.2761 2.72386 17.5 3 17.5V17ZM3 4V3.5C2.72386 3.5 2.5 3.72386 2.5 4H3ZM21.5 17V4H20.5V17H21.5ZM13 17.5H21V16.5H13V17.5ZM7.27735 21.416L13.2774 17.416L12.7226 16.584L6.72265 20.584L7.27735 21.416ZM6.5 17V21H7.5V17H6.5ZM3 17.5H7V16.5H3V17.5ZM2.5 4V17H3.5V4H2.5ZM21 3.5H3V4.5H21V3.5Z" fill="white" />
                            </svg>
                            <span>11</span>

                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M12 15V3" stroke="white" stroke-linecap="round" />
                                <path d="M9 5L12 2L15 5" stroke="white" stroke-linecap="round" />
                                <rect x="6" y="9" width="12" height="12" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
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
                    <div>
                        <UserProfile />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
