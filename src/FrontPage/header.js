import React, { Component } from 'react';
import logo from './img/logo.svg';
import './headerFooter.scss';

export default class header extends Component {
  render() {
    return (
      <div>
      <header>
        <div className='container'>
        <a href='/home'><img src={logo} alt='Carvonix Logo' /></a>
          <div className='rightbar'>
            <a href='/'>Log In</a>
            <a href='/'>Download App</a>
          </div>
        </div>
      </header>
      </div>
    )
  }
}
