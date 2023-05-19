import React, { Component } from 'react';
import './CrewsBuilds.scss';

export default class CrewsBuilds extends Component {
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='crews-builds'>
                        <div className='crews-block'>
                            <div className='info'>
                                <h3>Crews</h3>
                                <p>Short explanation worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                                <a href='/' className='d-flex align-items-center'>Learn more <i class="ms-2 fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                        <div className='crews-block'>
                            <div className='info'>
                                <h3>Builds</h3>
                                <p>Short explanation worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                                <a href='/' className='d-flex align-items-center'>Learn more <i class="ms-2 fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
