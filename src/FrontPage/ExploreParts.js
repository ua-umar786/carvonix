import React, { Component } from 'react';
import './ExploreParts.scss';
import Icon from './img/explore-icon.svg';

export default class ExploreParts extends Component {
    render() {
        return (
            <div className='exploreParts'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xxl-8 col-lg-9'>
                            <div className='d-md-flex align-items-center'>
                                <h2>Explore Parts & Components</h2>
                                <a href='/' className='d-flex align-items-center ms-md-4 large-a'>Explore more <i class="ms-2 fa-solid fa-arrow-right"></i></a>
                            </div>
                            <p className='mt-3'>Short explanation worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                            <div className='search-filter'>
                                <select className='default-select'>
                                    <option>Year</option>
                                    <option>Year</option>
                                </select>
                                <select className='default-select'>
                                    <option>Make</option>
                                    <option>Year</option>
                                </select>
                                <select className='default-select'>
                                    <option>Model</option>
                                    <option>Year</option>
                                </select>
                                <button className='default-btn'>
                                    Find Parts
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='listing'>
                        {Array.from({ length: 9 }, (_, i) =>
                            <div className='list-block'>
                                <img src={Icon} alt='' />
                                <p>Performance</p>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        )
    }
}
