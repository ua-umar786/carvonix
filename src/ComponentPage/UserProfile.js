import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './UserProfile.scss';
import SliderImg from './img/borla.jpg';

export default class UserProfile extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
                <div className='user-detail-wrapper'>
                    <div className='avtar-in'>
                        <img src={SliderImg} alt="" className='main-img' />
                        <div>
                            <div className='name'>Username</div>
                            <div className='d-flex align-items-center'><i className="fa-sharp fa-solid fa-location-dot pe-2"></i> Denver, CO</div>
                        </div>
                    </div>
                    <div className='follow-info'>
                        <div>
                            <h6>4.1k</h6>
                            <p>Followers</p>
                        </div>
                        <div>
                            <h6>94</h6>
                            <p>Posts</p>
                        </div>
                        <div>
                            <h6>2</h6>
                            <p>Vehicles</p>
                        </div>
                    </div>
                    <div className='user-personal-info'>
                        Lorem ipsum dolor sit amet elit libero consectetur adipiscing elit. Vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent nostra... <span>more</span>
                    </div>
                    <div className='follow-btn'>Follow</div>
                </div>

                <h2>For You</h2>

                <div className='for-you-list'>
                    <div className='foryou-user'>
                        <div className='for-avtar'>
                            <img src={SliderImg} alt="" className='main-img' />
                            <div>
                                <div className='name'>Username</div>
                                <div className='d-flex'>4h ago</div>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et...</p>
                    </div>
                    <div className='foryou-user'>
                        <div className='for-avtar'>
                            <img src={SliderImg} alt="" className='main-img' />
                            <div>
                                <div className='name'>Username</div>
                                <div className='d-flex'>4h ago</div>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et...</p>
                    </div>
                    <div className='foryou-user'>
                        <div className='for-avtar'>
                            <img src={SliderImg} alt="" className='main-img' />
                            <div>
                                <div className='name'>Username</div>
                                <div className='d-flex'>4h ago</div>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et...</p>
                    </div>
                </div>

            </div>
        )
    }
}
