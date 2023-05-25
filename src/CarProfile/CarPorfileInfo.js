import React, { Component } from 'react';
import BannerImg from './img/banner-img.jpg';
import EngIcon from './img/eng.svg';
import './CarPorfileInfo.scss';
import BuildParts from './BuildParts';
import Posts from './Posts';
import Rating from './Rating';


export default class CarPorfileInfo extends Component {
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-lg-6'>
                            <div className='car-banner'>
                                <div className='stars'>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star-half-stroke"></i>
                                </div>
                                <h1>Audi R8</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos... more</p>
                                <div className='tags'>
                                    <span>2022</span>
                                    <span>Audi</span>
                                    <span>R8</span>
                                </div>
                                <div className='action-btns'>
                                    <button className='btn btn-blue me-3'>Follow</button>
                                    <button className='btn btn-grey'>Rate</button>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='banner-img'>
                                <img src={BannerImg} alt="" />
                                <div className='short-info'>
                                    <div className='clm'>
                                        <h3>4.1k</h3>
                                        <p>Followers</p>
                                    </div>
                                    <div className='clm'>
                                        <h3>4.1k</h3>
                                        <p>Followers</p>
                                    </div>
                                    <div className='clm'>
                                        <h3>4.1k</h3>
                                        <p>Followers</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-12'>
                            <div className='extra-info'>
                                <div className='info-block'>
                                    <h3>V10</h3>
                                    <p><img src={EngIcon} alt='' /> Engine</p>
                                </div>
                                <div className='info-block'>
                                    <h3>V10</h3>
                                    <p><img src={EngIcon} alt='' /> Engine</p>
                                </div>
                                <div className='info-block'>
                                    <h3>V10</h3>
                                    <p><img src={EngIcon} alt='' /> Engine</p>
                                </div>
                                <div className='info-block'>
                                    <h3>V10</h3>
                                    <p><img src={EngIcon} alt='' /> Engine</p>
                                </div>
                                <div className='info-block'>
                                    <h3>V10</h3>
                                    <p><img src={EngIcon} alt='' /> Engine</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <BuildParts />
                <Posts />
                <Rating />
            </div>
        )
    }
}
