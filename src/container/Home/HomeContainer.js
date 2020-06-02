import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import IntroContainer from './Intro/IntroContainer';
import ContentsContainer from './contents/ContentsContainer';


class HomeContainer extends Component {
    state = {
        baseData: {
            title: '새우 두부 계란찜',
            category: '반찬',
            calorie: '220kcal',
            madeBy: 'teriyaki',
            titleImageL: 'http://www.foodsafetykorea.go.kr/uploadimg/cook/10_00028_1.png',
            titleImageS: 'http://www.foodsafetykorea.go.kr/uploadimg/cook/10_00028_2.png',
            ingredients: '새우두부계란찜 연두부 75g(3/4모), 칵테일새우 20g(5마리), 달걀 30g(1/2개), 생크림 13g(1큰술), 설탕 5g(1작은술), 무염버터 5g(1작은술) 고명 시금치 10g(3줄기)',
        },
    }

    render() {
        const { baseData } = this.state;
        return (
            <section className="home">
                <IntroContainer />
                <ContentsContainer />
            </section>
        )
    }
}

export default HomeContainer;