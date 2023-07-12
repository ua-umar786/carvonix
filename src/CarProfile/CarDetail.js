import React, { Component } from 'react';
import CarProfileInfo from './CarPorfileInfo';
import UserProfile from '../ComponentPage/UserProfile';
import ProfileSideBar from '../ComponentPage/ProfileSideBar';
import Header from '../FrontPage/header';
import Footer from '../FrontPage/Footer';
import Rating from './Rating';

export default class CarDetail extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className='page-container'>
          <ProfileSideBar />
          <div>
            <CarProfileInfo />
          </div>
          <div>
            <UserProfile />
          </div>
        </div>
        <Rating />
        <Footer />
      </div>
    )
  }
}
