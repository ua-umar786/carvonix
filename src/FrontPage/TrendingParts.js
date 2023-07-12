import React, { Component } from 'react';
import './TrendingParts.scss';
import PartImg from './img/car-part.png';

export default class TrendingParts extends Component {
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='Trendingparts'>
                        <h3>Trending parts & components posts</h3>
                        <div className='row'>
                            <div className='col-lg-3 col-md-6'>
                                <div className='part-block'>
                                    <a href='/vehicle-profile'>
                                        <img src={PartImg} alt='' className='main-img' />
                                        <div className='info'>
                                            <div className='name'>Car name</div>
                                            <div className='h4'>Title of Post will display
                                                across two lines.</div>
                                            <p>These tires are a big upgrade vs the stock all season units. I also bought Enki wheels together they are eight</p>
                                        </div>
                                        <div className='ext-info'>
                                            <span>4x4</span>
                                            <span>Rockcrawler</span>
                                            <span>Expeditions</span>
                                            <span>4x4</span>
                                            <span>Rockcrawler</span>
                                            <span>Expeditions</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-6'>
                                <div className='part-block'>
                                    <a href='/vehicle-profile'>
                                        <img src={PartImg} alt='' className='main-img' />
                                        <div className='info'>
                                            <div className='name'>Car name</div>
                                            <div className='h4'>Title of Post will display
                                                across two lines.</div>
                                            <p>These tires are a big upgrade vs the stock all season units. I also bought Enki wheels together they are eight</p>
                                        </div>
                                        <div className='ext-info'>
                                            <span>4x4</span>
                                            <span>Rockcrawler</span>
                                            <span>Expeditions</span>
                                            <span>4x4</span>
                                            <span>Rockcrawler</span>
                                            <span>Expeditions</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-6'>
                                <div className='part-block'>
                                    <a href='/vehicle-profile'>
                                        <img src={PartImg} alt='' className='main-img' />
                                        <div className='info'>
                                            <div className='name'>Car name</div>
                                            <div className='h4'>Title of Post will display
                                                across two lines.</div>
                                            <p>These tires are a big upgrade vs the stock all season units. I also bought Enki wheels together they are eight</p>
                                        </div>
                                        <div className='ext-info'>
                                            <span>4x4</span>
                                            <span>Rockcrawler</span>
                                            <span>Expeditions</span>
                                            <span>4x4</span>
                                            <span>Rockcrawler</span>
                                            <span>Expeditions</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-6'>
                                <div className='part-block'>
                                    <a href='/vehicle-profile'>
                                        <img src={PartImg} alt='' className='main-img' />
                                        <div className='info'>
                                            <div className='name'>Car name</div>
                                            <div className='h4'>Title of Post will display
                                                across two lines.</div>
                                            <p>These tires are a big upgrade vs the stock all season units. I also bought Enki wheels together they are eight</p>
                                        </div>
                                        <div className='ext-info'>
                                            <span>4x4</span>
                                            <span>Rockcrawler</span>
                                            <span>Expeditions</span>
                                            <span>4x4</span>
                                            <span>Rockcrawler</span>
                                            <span>Expeditions</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
