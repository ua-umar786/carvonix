import React, { Component } from 'react';
import CtaImg from './img/cta-img.png';
import AppStore from './img/appstore.svg';
import GooglePlay from './img/googleplay.svg';
import './CallToAction.scss';

export default class CallToAction extends Component {
    render() {
        return (
            <div className='cta-section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='info'>
                            <h2>Call to action download the app</h2>
                            <p>Everything you need to know about car builds and upgrades, all in one place...</p>
                            <a href='/' className='d-flex align-items-center'>Learn more <i class="ms-2 fa-solid fa-arrow-right"></i></a>
                            <div className='d-flex'>
                                <a href='/'><img src={AppStore} alt='' className='me-3' /></a>
                                <a href='/'><img src={GooglePlay} alt='' className='' /></a>
                            </div>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <img src={CtaImg} alt='' />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
