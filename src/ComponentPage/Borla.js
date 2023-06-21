import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './borla.scss';
import ProfileSideBar from './ProfileSideBar';
import PartsSlider from './PartsSlider';
import UserProfile from './UserProfile';
import HowToInstall from './HowToInstall';
import GeneralPost from './GeneralPost';

export default class Borla extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
        <div className='page-container'>
          <ProfileSideBar />
          <div>
            {/* <PartsSlider /> */}
            {/* <HowToInstall /> */}
            <GeneralPost />
          </div>
          <div>
          <UserProfile />
          </div>
        </div>
      </div>
    )
  }
}
