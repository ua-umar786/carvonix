import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avtar from './img/Avatar.png';
import SliderImg from './img/borla.jpg';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './PartsSlider.scss';

export default class PartsSlider extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
                <div className='post-title'>
                    <div>
                        <h1>Borla Exhaust</h1>
                        <div className='tags'>
                            <span>2020</span>
                            <span>Ford</span>
                            <span>GT500</span>
                            <span>Performance</span>
                        </div>
                    </div>
                </div>
                <div className='slider-img'>
                    <OwlCarousel items={1}
                        className="owl-theme"
                        loop
                        nav
                        margin={0} >
                        <div ><img src={SliderImg} alt="" className='main-img' /></div>
                        <div ><img src={SliderImg} alt="" className='main-img' /></div>
                        <div ><img src={SliderImg} alt="" className='main-img' /></div>
                        <div ><img src={SliderImg} alt="" className='main-img' /></div>

                    </OwlCarousel>
                    <div className='rating-stars'>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star-half'></i>
                        <span>(278)</span>
                    </div>
                    <h1>Headline Text</h1>
                    <p>Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                    <div className='actions-btns'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.48149 7.43827C8.17078 7.80075 8 8.26243 8 8.73985V17C8 18.1046 8.89543 19 10 19H17.3308C18.2974 19 19.1257 18.3088 19.2986 17.3578L20.5713 10.3578C20.7945 9.13009 19.8514 8 18.6036 8H14L15.6279 3.11634C15.8414 2.47579 15.5514 1.77571 14.9475 1.47375V1.47375C14.3906 1.19532 13.7158 1.33161 13.3106 1.80431L8.48149 7.43827Z" stroke="white" />
                            <path d="M4 18V9" stroke="white" stroke-linecap="round" />
                        </svg>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5185 16.5617C15.8292 16.1992 16 15.7376 16 15.2602L16 7C16 5.89543 15.1046 5 14 5H6.66915C5.70258 5 4.87432 5.69125 4.70141 6.64223L3.42869 13.6422C3.20547 14.8699 4.14862 16 5.39643 16H10L8.37211 20.8837C8.1586 21.5242 8.44858 22.2243 9.0525 22.5262V22.5262C9.60935 22.8047 10.2842 22.6684 10.6894 22.1957L15.5185 16.5617Z" stroke="white" />
                            <path d="M20 6V15" stroke="white" stroke-linecap="round" />
                        </svg>

                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 15V3" stroke="white" stroke-linecap="round" />
                            <path d="M9 5L12 2L15 5" stroke="white" stroke-linecap="round" />
                            <rect x="6" y="9" width="12" height="12" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <div className='view-comments'>
                        View comments
                    </div>
                    <h3 className='users-review-heading'>Other User Reviews</h3>
                    <div className='average-rating'>
                        <p>Average Rating</p>
                        <div className='rating-stars'>
                            <span>4.0</span>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star-half'></i>
                        </div>
                    </div>
                    <div className='user-rating-list'>
                        <div className='user-rating-block'>
                            <div className='img-holder'>
                                <img src={SliderImg} alt="" className='bg-img' />
                                <div className='info'>
                                    <img src={SliderImg} alt="" className='avtar-img' />
                                    <div>
                                        <p>Username</p>
                                        <p>Vehicle</p>
                                    </div>
                                </div>
                            </div>
                            <div className='rating-stars'>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star-half'></i>
                            </div>
                            <h4>Headline Text</h4>
                        </div>
                        <div className='user-rating-block'>
                            <div className='img-holder'>
                                <img src={SliderImg} alt="" className='bg-img' />
                                <div className='info'>
                                    <img src={SliderImg} alt="" className='avtar-img' />
                                    <div>
                                        <p>Username</p>
                                        <p>Vehicle</p>
                                    </div>
                                </div>
                            </div>
                            <div className='rating-stars'>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star-half'></i>
                            </div>
                            <h4>Headline Text</h4>
                        </div>
                    </div>

                    <div className='how-to-section'>
                        <h2>How to</h2>
                        <div className='block-list'>
                            <div className='how-block'>
                                <a href='/how-to-install'>
                                    <img src={SliderImg} alt="" className='how-img' />
                                </a>
                                <div className='info'>
                                    <ul className='install-info'>
                                        <li>6 Steps</li>
                                        <li>5 hrs</li>
                                        <li>4/5 difficulty</li>
                                    </ul>
                                    <h4>How To Install</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio.</p>
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

                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 15V3" stroke="white" stroke-linecap="round" />
                                            <path d="M9 5L12 2L15 5" stroke="white" stroke-linecap="round" />
                                            <rect x="6" y="9" width="12" height="12" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className='how-block'>
                                <a href='/how-to-install'>
                                    <img src={SliderImg} alt="" className='how-img' />
                                </a>
                                <div className='info'>
                                    <ul className='install-info'>
                                        <li>6 Steps</li>
                                        <li>5 hrs</li>
                                        <li>4/5 difficulty</li>
                                    </ul>
                                    <h4>How To Install</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio.</p>
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

                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 15V3" stroke="white" stroke-linecap="round" />
                                            <path d="M9 5L12 2L15 5" stroke="white" stroke-linecap="round" />
                                            <rect x="6" y="9" width="12" height="12" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className='how-block'>
                                <a href='/how-to-install'>
                                    <img src={SliderImg} alt="" className='how-img' />
                                </a>
                                <div className='info'>
                                    <ul className='install-info'>
                                        <li>6 Steps</li>
                                        <li>5 hrs</li>
                                        <li>4/5 difficulty</li>
                                    </ul>
                                    <h4>How To Install</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio.</p>
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

                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 15V3" stroke="white" stroke-linecap="round" />
                                            <path d="M9 5L12 2L15 5" stroke="white" stroke-linecap="round" />
                                            <rect x="6" y="9" width="12" height="12" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className='how-block'>
                                <a href='/how-to-install'>
                                    <img src={SliderImg} alt="" className='how-img' />
                                </a>
                                <div className='info'>
                                    <ul className='install-info'>
                                        <li>6 Steps</li>
                                        <li>5 hrs</li>
                                        <li>4/5 difficulty</li>
                                    </ul>
                                    <h4>How To Install</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio.</p>
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

                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 15V3" stroke="white" stroke-linecap="round" />
                                            <path d="M9 5L12 2L15 5" stroke="white" stroke-linecap="round" />
                                            <rect x="6" y="9" width="12" height="12" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='gallery-section mb-5'>
                        <h2>Gallery</h2>
                        <div className='gallery-list'>
                            <div className='how-block'>
                                <img src={SliderImg} alt="" className='gallery-img' />
                            </div>
                            <div className='how-block'>
                                <img src={SliderImg} alt="" className='gallery-img' />
                            </div>
                            <div className='how-block'>
                                <img src={SliderImg} alt="" className='gallery-img' />
                            </div>
                            <div className='how-block'>
                                <img src={SliderImg} alt="" className='gallery-img' />
                            </div>
                        </div>
                        <div className='show-more'>Show more posts
                            <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="arrow-down">
                                    <path id="Path 2" d="M7.99967 2.75V16.25" stroke="#387AFF" stroke-linecap="round" />
                                    <path id="Path 3" d="M4 11.75L8 16.25L12 11.75" stroke="#387AFF" stroke-linecap="round" />
                                </g>
                            </svg>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
