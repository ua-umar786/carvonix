import React, { Component } from 'react';
import './BuildParts.scss';
import PartImg from '../FrontPage/img/car-part.png';

export default class BuildParts extends Component {
    render() {
        return (
            <div>
                <div className='container'>
                    <h2>Build</h2>
                    <div className='filters'>
                        <div className='select-wrapper'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <rect width="24" height="24" rx="12" fill="#8E8E93" />
                                <path d="M20 10.1986V15.6207C20 15.9536 19.7226 16.2212 19.3821 16.2212H18.2219C17.9319 16.2212 17.6293 16.0309 17.5032 15.7753L17.396 15.5434C17.3771 15.5077 17.3014 15.4602 17.2699 15.4602H16.4502L16.3178 16.4411C16.28 16.7503 15.9899 17 15.6683 17H10.599C10.3089 17 10.0126 16.8157 9.8802 16.566L9.53972 15.8882C9.52081 15.8466 9.43883 15.799 9.40731 15.799H7.28877C6.94829 15.799 6.67087 15.5315 6.67087 15.2045V12.8145H5.64943V14.2235C5.64943 14.39 5.50441 14.5268 5.32786 14.5268C5.15132 14.5268 5 14.39 5 14.2235V10.7931C5 10.6266 5.14501 10.4899 5.32786 10.4899C5.51071 10.4899 5.64943 10.6266 5.64943 10.7931V12.2021H6.67087V10.6088C6.67087 10.2818 6.94829 10.0143 7.28877 10.0143H9.40731L9.37579 9.25921C9.37579 8.93222 9.65322 8.66468 9.99369 8.66468H12.1311V7.61237H10.7314C10.5549 7.61237 10.4098 7.47562 10.4098 7.30916C10.4098 7.14269 10.5549 7 10.7314 7H14.174C14.3569 7 14.5019 7.13674 14.5019 7.30916C14.5019 7.48157 14.3569 7.61237 14.174 7.61237H12.7806V8.66468H14.4893C14.7352 8.66468 15.0441 8.78359 15.2207 8.95006L16.0656 9.72889C16.2358 9.88942 16.3808 10.1748 16.4061 10.4067L16.4439 10.7693L17.2699 10.7872C17.2699 10.7872 17.3266 10.7515 17.3329 10.7277L17.5284 10.0975C17.6166 9.81213 17.913 9.5981 18.2219 9.5981H19.3821C19.7226 9.5981 20 9.86564 20 10.1986Z" fill="#F5F5F5" />
                            </svg>
                            <select className='default-select'>
                                <option>Performance</option>
                            </select>
                        </div>
                        <div className='select-wrapper'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <rect width="24" height="24" rx="12" fill="#8E8E93" />
                                <path d="M20 10.1986V15.6207C20 15.9536 19.7226 16.2212 19.3821 16.2212H18.2219C17.9319 16.2212 17.6293 16.0309 17.5032 15.7753L17.396 15.5434C17.3771 15.5077 17.3014 15.4602 17.2699 15.4602H16.4502L16.3178 16.4411C16.28 16.7503 15.9899 17 15.6683 17H10.599C10.3089 17 10.0126 16.8157 9.8802 16.566L9.53972 15.8882C9.52081 15.8466 9.43883 15.799 9.40731 15.799H7.28877C6.94829 15.799 6.67087 15.5315 6.67087 15.2045V12.8145H5.64943V14.2235C5.64943 14.39 5.50441 14.5268 5.32786 14.5268C5.15132 14.5268 5 14.39 5 14.2235V10.7931C5 10.6266 5.14501 10.4899 5.32786 10.4899C5.51071 10.4899 5.64943 10.6266 5.64943 10.7931V12.2021H6.67087V10.6088C6.67087 10.2818 6.94829 10.0143 7.28877 10.0143H9.40731L9.37579 9.25921C9.37579 8.93222 9.65322 8.66468 9.99369 8.66468H12.1311V7.61237H10.7314C10.5549 7.61237 10.4098 7.47562 10.4098 7.30916C10.4098 7.14269 10.5549 7 10.7314 7H14.174C14.3569 7 14.5019 7.13674 14.5019 7.30916C14.5019 7.48157 14.3569 7.61237 14.174 7.61237H12.7806V8.66468H14.4893C14.7352 8.66468 15.0441 8.78359 15.2207 8.95006L16.0656 9.72889C16.2358 9.88942 16.3808 10.1748 16.4061 10.4067L16.4439 10.7693L17.2699 10.7872C17.2699 10.7872 17.3266 10.7515 17.3329 10.7277L17.5284 10.0975C17.6166 9.81213 17.913 9.5981 18.2219 9.5981H19.3821C19.7226 9.5981 20 9.86564 20 10.1986Z" fill="#F5F5F5" />
                            </svg>
                            <select className='default-select'>
                                <option>View all</option>
                            </select>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-lg-6 col-md-6'>
                            <div className='part-block'>
                                <a href='/component-page'>
                                    <img src={PartImg} alt='' className='main-img' />
                                </a>
                                <div className='info'>
                                    <div className='name'>Engine</div>
                                    <div className='h4'>Title of Post </div>
                                    <p>Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio.</p>
                                </div>
                                <div className='actions-btns m-0'>
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
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17 6.65882V19.5858L12.5364 16.7487C12.2091 16.5407 11.7909 16.5407 11.4636 16.7487L7 19.5858L7 6.65882C7 5.19039 8.11929 4 9.5 4L14.5 4C15.8807 4 17 5.19039 17 6.65882Z" stroke="white" stroke-linecap="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6'>
                            <div className='part-block'>
                                <a href='/component-page'>
                                    <img src={PartImg} alt='' className='main-img' />
                                </a>
                                <div className='info'>
                                    <div className='name'>Engine</div>
                                    <div className='h4'>Title of Post </div>
                                    <p>Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio.</p>
                                </div>
                                <div className='actions-btns m-0'>
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
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17 6.65882V19.5858L12.5364 16.7487C12.2091 16.5407 11.7909 16.5407 11.4636 16.7487L7 19.5858L7 6.65882C7 5.19039 8.11929 4 9.5 4L14.5 4C15.8807 4 17 5.19039 17 6.65882Z" stroke="white" stroke-linecap="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}
