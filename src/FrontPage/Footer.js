import React, { Component } from 'react';
import './headerFooter.scss';
import FooterLogo from './img/footer-logo.svg';
import Envlope from './img/envelope-alt.svg';
import Phone from './img/phone.svg';
import AppStore from './img/appstore.svg';
import GooglePlay from './img/googleplay.svg';


export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <img src={FooterLogo} alt='' className='mb-4' />
                            <div className='d-flex mb-2'>
                                <img src={Envlope} alt='' className='me-2' />
                                <a href='mailto:support@carvonix.com'>support@carvonix.com</a>
                            </div>
                            <div className='d-flex'>
                                <img src={Phone} alt='' className='me-2' />
                                <a href='tel:+1 234-555-2222'>+1 234-555-2222</a>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='row'>
                                <div className='col'>
                                    <h4>Community</h4>
                                    <ul>
                                        <li><a href='/'>Crews</a></li>
                                        <li><a href='/'>Builds</a></li>
                                        <li><a href='/'>Parts & Components</a></li>
                                    </ul>
                                </div>
                                <div className='col'>
                                    <h4>Company</h4>
                                    <ul>
                                        <li><a href='/'>About</a></li>
                                        <li href="/">Support</li>
                                        <li href="/">Contact</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-4'>
                            <h4>Download the app</h4>
                            <div className='d-flex'>
                                <a href='/'><img src={AppStore} alt='' className='me-3' /></a>
                                <a href='/'><img src={GooglePlay} alt='' className='' /></a>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='copyright'>
                    <div className='container'>
                        <p>© 2023 CARVONIX. All Rights Reserved.</p>
                        <ul>
                            <li><a href='/'>Terms of use</a></li>
                            <li><a href='/'>Privacy Policy</a></li>
                            <li><a href='/'>Cookie Policy</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        )
    }
}
