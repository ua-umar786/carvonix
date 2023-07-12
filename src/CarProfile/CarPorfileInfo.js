import React, { Component } from 'react';
import BannerImg from './img/banner-img.jpg';
import './Posts.scss';
import Gallery1 from './img/gallery-img3.jpg';
import Gallery2 from './img/gallery-img2.jpg';
import EngIcon from './img/eng.svg';
import './CarPorfileInfo.scss';
import BuildParts from './BuildParts';
import Avtar from './img/Avatar.png';
import Posts from './Posts';



export default class CarPorfileInfo extends Component {
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row align-items-center'>

                        <div className='col-lg-12'>
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
                            <div className='car-banner'>
                                <div className='rating-wrapper-btns'>
                                    <div className='stars'>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star-half-stroke"></i>
                                        <span>(278)</span>
                                    </div>
                                    <div className='action-btns'>
                                        <button className='btn btn-blue me-3'>Follow</button>
                                        <button className='btn btn-grey'>Rate</button>
                                    </div>
                                </div>

                                <h1 className='d-flex align-items-center'><img src={Avtar} alt="" className='me-3' /> Audi R8</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos... <span>more</span></p>
                                <div className='tags'>
                                    <span>2022</span>
                                    <span>Audi</span>
                                    <span>R8</span>
                                </div>

                            </div>
                        </div>

                        <div className='col-lg-12'>
                            <div className='extra-info'>
                                <div className='info-block'>
                                    <h3>V10</h3>
                                    <p><svg xmlns="http://www.w3.org/2000/svg" width="18" height="13" viewBox="0 0 18 13" fill="none">
                                        <path d="M5.10089 10.5397L4.95227 10.3776H4.73232H3.64048V8.84354V8.34354H3.14048H1.63708H1.13708V8.84354V10.3776H0.810547V5.98299H1.13708V7.42857V7.92857H1.63708H3.14048H3.64048V7.42857V5.98299H4.73232H4.96422L5.11401 5.80596L6.90979 3.68367H8.97721H9.47721V3.18367V1.41497V0.914966H8.97721H7.79694V0.5H11.7493V0.914966H10.5691H10.0691V1.41497V3.18367V3.68367H10.5691H13.9273L14.0486 3.86567V6.63265V7.13265H14.5486H15.6983H16.1983V6.63265V5.45238H16.7901V10.1122H16.1983V8.84354V8.34354H15.6983H14.5486H14.0486V8.84354V9.96296L11.5116 12.5H6.89785L5.10089 10.5397Z" stroke="#8E8E93" />
                                    </svg>
                                        Engine</p>
                                </div>
                                <div className='info-block'>
                                    <h3>674 <span>hp</span></h3>
                                    <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" viewBox="0 0 16 13" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.8844 6.69686C15.8844 10.1779 13.0625 12.9999 9.58138 12.9999C6.1003 12.9999 3.27832 10.1779 3.27832 6.69686C3.27832 3.21577 6.1003 0.393799 9.58138 0.393799C13.0625 0.393799 15.8844 3.21577 15.8844 6.69686ZM9.58138 9.0605C10.8868 9.0605 11.945 8.00226 11.945 6.69686C11.945 5.39145 10.8868 4.33321 9.58138 4.33321C8.27597 4.33321 7.21773 5.39145 7.21773 6.69686C7.21773 8.00226 8.27597 9.0605 9.58138 9.0605Z" fill="#8E8E93" />
                                        <rect x="0.914062" y="0.393799" width="8.66671" height="3.93941" fill="#8E8E93" />
                                        <rect x="0.914062" width="1.57576" height="4.72729" fill="#8E8E93" />
                                    </svg>
                                        Horsepower</p>
                                </div>
                                <div className='info-block'>
                                    <h3>413 <span>lb-ft</span></h3>
                                    <p><svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
                                        <path d="M11.1252 4.28956C11.0768 4.17825 10.9982 4.08272 10.8982 4.01381C10.7983 3.94489 10.6811 3.90534 10.5598 3.89964H7.58339L8.40874 0.819225C8.43502 0.722832 8.43873 0.621676 8.41957 0.523618C8.40041 0.42556 8.3589 0.33324 8.29826 0.253833C8.23772 0.175188 8.15997 0.111455 8.07097 0.0675206C7.98198 0.0235867 7.8841 0.000619696 7.78486 0.000381139H3.23573C3.08901 -0.0046445 2.94491 0.0401534 2.8269 0.127479C2.7089 0.214804 2.62393 0.339511 2.58585 0.481289L0.844184 6.98005C0.817897 7.07644 0.814191 7.1776 0.833352 7.27565C0.852512 7.37371 0.894024 7.46603 0.954662 7.54544C1.01587 7.62496 1.09466 7.68922 1.18486 7.73319C1.27506 7.77716 1.37422 7.79965 1.47456 7.79889H3.98958L2.81331 12.1791C2.77477 12.3203 2.78505 12.4704 2.84249 12.6051C2.89993 12.7398 3.00115 12.8511 3.12977 12.921C3.25839 12.991 3.40685 13.0154 3.55111 12.9905C3.69537 12.9655 3.82698 12.8925 3.92459 12.7834L11.0082 4.98493C11.0926 4.89257 11.1485 4.77783 11.1692 4.65449C11.19 4.53114 11.1747 4.40443 11.1252 4.28956ZM4.76293 9.93048L5.4583 7.33098C5.48459 7.23459 5.48829 7.13343 5.46913 7.03537C5.44997 6.93732 5.40846 6.845 5.34782 6.76559C5.28728 6.68694 5.20953 6.62321 5.12054 6.57928C5.03154 6.53534 4.93367 6.51238 4.83442 6.51214H2.3389L3.72963 1.30013H6.93352L6.10818 4.38054C6.08168 4.47871 6.07859 4.58173 6.09915 4.68131C6.11971 4.78089 6.16335 4.87425 6.22656 4.9539C6.28977 5.03355 6.37079 5.09725 6.4631 5.13988C6.55541 5.18252 6.65643 5.2029 6.75805 5.19939H9.07811L4.76293 9.93048Z" fill="#8E8E93" />
                                    </svg>
                                        Torque</p>
                                </div>
                                <div className='info-block'>
                                    <h3 className='align-items-center'>7 <span>speed manual</span></h3>
                                    <p><svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.59181 2.79424C3.07982 2.55867 3.41721 2.05324 3.41721 1.46774C3.41721 0.65713 2.77051 0 1.97276 0C1.17502 0 0.52832 0.65713 0.52832 1.46774C0.52832 2.05324 0.865712 2.55867 1.35372 2.79424V10.2058C0.865712 10.4413 0.52832 10.9468 0.52832 11.5323C0.52832 12.3429 1.17502 13 1.97276 13C2.77051 13 3.41721 12.3429 3.41721 11.5323C3.41721 10.9468 3.07982 10.4413 2.59181 10.2058V7.12903H5.4807V10.2058C4.9927 10.4413 4.6553 10.9468 4.6553 11.5323C4.6553 12.3429 5.302 13 6.09975 13C6.89749 13 7.54419 12.3429 7.54419 11.5323C7.54419 10.9468 7.2068 10.4413 6.7188 10.2058V7.12903H10.8458V6.70968V5.87097V2.79424C11.3338 2.55867 11.6712 2.05324 11.6712 1.46774C11.6712 0.65713 11.0245 0 10.2267 0C9.42899 0 8.78229 0.65713 8.78229 1.46774C8.78229 2.05324 9.11968 2.55867 9.60769 2.79424V5.87097H6.7188V2.79424C7.2068 2.55867 7.54419 2.05324 7.54419 1.46774C7.54419 0.65713 6.89749 0 6.09975 0C5.302 0 4.6553 0.65713 4.6553 1.46774C4.6553 2.05324 4.9927 2.55867 5.4807 2.79424V5.87097H2.59181V2.79424Z" fill="#8E8E93" />
                                    </svg>
                                        Transmisson</p>
                                </div>
                                <div className='info-block'>
                                    <h3>RWD</h3>
                                    <p><svg xmlns="http://www.w3.org/2000/svg" width="17" height="12" viewBox="0 0 17 12" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.11045 0C0.883873 0 0.700195 0.185262 0.700195 0.413793V1.24138C0.700195 1.46991 0.883873 1.65517 1.11045 1.65517H1.93096L1.93096 4.6911C1.44585 4.92354 1.11045 5.42226 1.11045 6C1.11045 6.57774 1.44585 7.07646 1.93096 7.3089L1.93096 10.3448H1.11045C0.883873 10.3448 0.700195 10.5301 0.700195 10.7586V11.5862C0.700195 11.8147 0.883873 12 1.11045 12H3.98225C4.20882 12 4.3925 11.8147 4.3925 11.5862V10.7586C4.3925 10.5301 4.20882 10.3448 3.98225 10.3448H3.16173L3.16173 7.3089C3.38879 7.20011 3.58305 7.03298 3.72547 6.82671C4.05348 7.6749 4.87136 8.27586 5.8284 8.27586C6.86124 8.27586 7.73201 7.57593 7.99987 6.62069H13.5563C13.6982 6.92187 13.9401 7.16583 14.2387 7.3089V10.3448H13.4181C13.1916 10.3448 13.0079 10.5301 13.0079 10.7586V11.5862C13.0079 11.8147 13.1916 12 13.4181 12H16.2899C16.5165 12 16.7002 11.8147 16.7002 11.5862V10.7586C16.7002 10.5301 16.5165 10.3448 16.2899 10.3448H15.4694V7.3089C15.9545 7.07646 16.2899 6.57774 16.2899 6C16.2899 5.42226 15.9545 4.92354 15.4694 4.6911V1.65517H16.2899C16.5165 1.65517 16.7002 1.46991 16.7002 1.24138V0.413793C16.7002 0.185262 16.5165 0 16.2899 0H13.4181C13.1916 0 13.0079 0.185262 13.0079 0.413793V1.24138C13.0079 1.46991 13.1916 1.65517 13.4181 1.65517H14.2387V4.6911C13.9401 4.83417 13.6982 5.07813 13.5563 5.37931H7.99987C7.73201 4.42407 6.86124 3.72414 5.8284 3.72414C4.87136 3.72414 4.05348 4.3251 3.72547 5.17329C3.58305 4.96702 3.38879 4.79989 3.16173 4.6911L3.16173 1.65517H3.98225C4.20882 1.65517 4.3925 1.46991 4.3925 1.24138V0.413793C4.3925 0.185262 4.20882 0 3.98225 0H1.11045ZM6.85404 6C6.85404 6.57133 6.39485 7.03448 5.8284 7.03448C5.26195 7.03448 4.80276 6.57133 4.80276 6C4.80276 5.42867 5.26195 4.96552 5.8284 4.96552C6.39485 4.96552 6.85404 5.42867 6.85404 6Z" fill="#8E8E93" />
                                    </svg>
                                        Drivetrain</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <BuildParts />
                <h2 className=''>Posts</h2>
                <div className='two-clm-posts'>
                    <div className='img-holder'>
                        <img src={Gallery1} alt='' />
                    </div>
                    <div className='img-holder'>
                        <img src={Gallery1} alt='' />
                    </div>
                    <div className='img-holder'>
                        <img src={Gallery1} alt='' />
                    </div>
                    <div className='img-holder'>
                        <img src={Gallery1} alt='' />
                    </div>
                </div>
                <div className='show-more-p'>Show more posts
                    <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="arrow-down">
                            <path id="Path 2" d="M7.99967 2.75V16.25" stroke="#387AFF" stroke-linecap="round" />
                            <path id="Path 3" d="M4 11.75L8 16.25L12 11.75" stroke="#387AFF" stroke-linecap="round" />
                        </g>
                    </svg>
                </div>
            </div>
        )
    }
}
