import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HomeIcon from './img/home-alt.svg';
import ExploreIcon from './img/explore.svg';
import SettingsIcon from './img/settings.svg';
import CarIcon from './img/car.svg';
import BellIcon from './img/bell.svg';
import Avtar from './img/Avatar.png';
import './ProfileSidebar.scss';

export default class ProfileSideBar extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
        <ul className='profile-links'>
            <li><a href='#'> <img src={HomeIcon} alt="" /> Home</a></li>
            <li><a href='#'> <img src={ExploreIcon} alt="" /> Explore</a></li>
            <li><a href='#'> <img src={CarIcon} alt="" /> Crews</a></li>
            <li><a href='#'> <img src={BellIcon} alt="" /> Notifications</a></li>
            <li><a href='#'> <img src={SettingsIcon} alt="" /> Settings</a></li>
            <li><a href='/user-profile'> <img src={Avtar} alt="" /> Profile</a></li>
        </ul>
      </div>
    )
  }
}
