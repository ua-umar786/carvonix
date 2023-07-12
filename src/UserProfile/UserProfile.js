import React, { Component } from 'react';
import BannerImg from './img/banner-img.jpg';
import UserImg from './img/user.png';
import Helmat from './img/helmat.svg';
import Header from '../FrontPage/header';
import Footer from '../FrontPage/Footer';
import ProfileSideBar from '../ComponentPage/ProfileSideBar';
import Lock from './img/lock.svg';
import Posts from '../CarProfile/Posts';
import './UserProfile.scss';


export default class UserProfile extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className='page-container user-page-container'>
                    <ProfileSideBar />
                    <div>
                        <div className='user-profile-section'>
                            <img src={BannerImg} className='banner-img' />
                            <div className='container'>
                                <div className='user-data'>
                                    <div className='avtar'>
                                        <img src={UserImg} className='avtar-img' />
                                        <div className='helmat-row'>
                                            <div className='helmat'>
                                                <img src={Helmat} className='' />
                                                <p>325</p>
                                            </div>
                                            <div className='shots'>
                                                <p>HEADSTRONG</p>
                                                <div className='bullets'>
                                                    <span className='active'></span>
                                                    <span className='active'></span>
                                                    <span className='active'></span>
                                                    <span className='active'></span>
                                                    <span></span>
                                                    <span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='userInfo'>
                                        <div className='name'>User Name</div>
                                        <div className='userName'>@username</div>
                                        <div className='followers'>
                                            <div className='clm'>
                                                <div className='number'>4.1k</div>
                                                <p>Followers</p>
                                            </div>
                                            <div className='clm'>
                                                <div className='number'>4.1k</div>
                                                <p>Following</p>
                                            </div>
                                            <div className='clm'>
                                                <div className='number'>94</div>
                                                <p>Posts</p>
                                            </div>
                                            <div className='clm'>
                                                <div className='number'>2</div>
                                                <p>Vehicles</p>
                                            </div>
                                        </div>
                                        <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti torquent nostra... <span>more</span></p>
                                    </div>
                                    <button className='default-btn'>Follow</button>
                                </div>
                            </div>
                        </div>

                        <div className='garage-section'>
                            <div className='container'>
                                <h2>Garage</h2>
                                <h3>Vehicles <span>2</span></h3>
                                <div className='garage-row'>
                                    <div className='garage-block'>
                                        <img src={BannerImg} />
                                        <div className='info'>
                                            <div className='stars'>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star-half-stroke"></i>
                                            </div>
                                            <div className='model'>2020 Ford</div>
                                            <div className='name'>Shelby GT500 <span className='current'>Current</span></div>
                                        </div>
                                    </div>
                                    <div className='garage-block'>
                                        <img src={BannerImg} />
                                        <div className='info'>
                                            <div className='stars'>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star-half-stroke"></i>
                                            </div>
                                            <div className='model'>2020 Ford</div>
                                            <div className='name'>Shelby GT500 <span className='current'>Current</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='crews-section'>
                            <div className='container'>
                                <h2>Crews</h2>
                                <div className='crews-row'>
                                    <div className='crews-block'>
                                        <img src={BannerImg} className='main-img' />
                                        <div className='info'>
                                            <div className='name'>Crew Name <img src={Lock} /></div>
                                            <p>Meetup</p>
                                        </div>
                                    </div>
                                    <div className='crews-block'>
                                        <img src={BannerImg} className='main-img' />
                                        <div className='info'>
                                            <div className='name'>Crew Name <img src={Lock} /></div>
                                            <p>Meetup</p>
                                        </div>
                                    </div>
                                    <div className='crews-block'>
                                        <img src={BannerImg} className='main-img' />
                                        <div className='info'>
                                            <div className='name'>Crew Name <img src={Lock} /></div>
                                            <p>Meetup</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <Posts />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
