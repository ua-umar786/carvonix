import React, { Component } from 'react';
import './banner.scss';
import CallToAction from './CallToAction';
import ExploreParts from './ExploreParts';
import TrendingParts from './TrendingParts';
import CrewsBuilds from './CrewsBuilds';

export default class HomeBanner extends Component {
    render() {
        return (
            <div>
                <div className='home-banner'>
                    <div className='container'>
                        <h1>Discover Your Community, with Carvonix</h1>
                        <form>
                            <input type='search' placeholder='Search for' className='search' ></input>
                            <select className='selectOption'>
                                <option>All categories</option>
                                <option>All categories</option>
                                <option>All categories</option>
                            </select>
                            <button type='submit'><i class="fa-solid fa-magnifying-glass"></i></button>
                        </form>
                        <p>Find inspiration, search for parts, and create your dream build with the world’s first app built by auto enthusiasts, for auto enthusiasts.</p>
                        <div className='quick-search'>
                            <h4>Quick search</h4>
                            <span>Trending</span>
                            <span>Builds</span>
                            <span>Reviews</span>
                            <span>How to</span>
                        </div>
                    </div>
                </div>
                <CallToAction />
                <ExploreParts />
                <TrendingParts />
                <CrewsBuilds />
            </div>
        )
    }
}
