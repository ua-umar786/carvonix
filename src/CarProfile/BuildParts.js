import React, { Component } from 'react';
import './BuildParts.scss';
import PartImg from '../FrontPage/img/car-part.png';

export default class BuildParts extends Component {
    render() {
        return (
            <div>
                <div className='container'>
                    <h2>Build</h2>
                    <div className='filters'>
                        <select className='default-select'>
                            <option>Performance</option>
                        </select>
                        <select className='default-select'>
                            <option>Performance</option>
                        </select>
                    </div>

                    <div className='row'>
                        <div className='col-lg-4 col-md-6'>
                            <div className='part-block'>
                                <img src={PartImg} alt='' className='main-img' />
                                <div className='info'>
                                    <div className='name'>Engine</div>
                                    <div className='h4'>Title of Post </div>
                                    <p>Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio.</p>
                                </div>

                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6'>
                            <div className='part-block'>
                                <img src={PartImg} alt='' className='main-img' />
                                <div className='info'>
                                    <div className='name'>Engine</div>
                                    <div className='h4'>Title of Post </div>
                                    <p>Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio.</p>
                                </div>

                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6'>
                            <div className='part-block'>
                                <img src={PartImg} alt='' className='main-img' />
                                <div className='info'>
                                    <div className='name'>Engine</div>
                                    <div className='h4'>Title of Post </div>
                                    <p>Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio.</p>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
