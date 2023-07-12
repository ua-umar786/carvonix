import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './borla.scss';
import ProfileSideBar from './ProfileSideBar';
import PartsSlider from './PartsSlider';
import UserProfile from './UserProfile';
import Header from '../FrontPage/header';
import Footer from '../FrontPage/Footer';

export default class Borla extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
        <Header />
        <div className='page-container'>
          <ProfileSideBar />
          <div>
            <PartsSlider />
          </div>
          <div>
            <UserProfile />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
