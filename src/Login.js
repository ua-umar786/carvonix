import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './FrontPage/img/logo.svg';
import './Login.scss';

export default class login extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
                <div className='login-wrapper'>
                    <div className='wrapper'>
                        <div className='find-text'>Find Your Drive with</div>
                        <img src={logo} alt='Carvonix Logo' className='logo' />
                        <div className='form-group mb-4'>
                            <input type='email' placeholder='Email' className='form-control' />
                        </div>
                        <div className='form-group'>
                            <input type='Password' placeholder='Password' className='form-control' />
                        </div>
                        <div className='forgot'>
                            Forgot password?
                        </div>
                        <a href='/' className='login-btn'>Log in</a>
                        <div className='or'>
                            OR
                        </div>
                        <div className='signup-text'>
                            Dont have an account? <a href='#'>Sign up</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
