import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import IntroContainer from './Intro/IntroContainer';
import ContentsContainer from './contents/ContentsContainer';


class HomeContainer extends Component {
    render() {
        return (
            <section className="home">
                <IntroContainer />
                <ContentsContainer />
            </section>
        )
    }
}

export default HomeContainer;