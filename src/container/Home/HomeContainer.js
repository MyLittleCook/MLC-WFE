import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './HomeContainer.scss';
import IntroContainer from './Intro/IntroContainer';


class HomeContainer extends Component {
    state = {
        baseData: {
            title: '새우 두부 계란찜',
            category: '반찬',
            calorie: '220kcal',
            titleImageL: 'http://www.foodsafetykorea.go.kr/uploadimg/cook/10_00028_1.png',
            titleImageS: 'http://www.foodsafetykorea.go.kr/uploadimg/cook/10_00028_2.png',
            ingredients: '새우두부계란찜 연두부 75g(3/4모), 칵테일새우 20g(5마리), 달걀 30g(1/2개), 생크림 13g(1큰술), 설탕 5g(1작은술), 무염버터 5g(1작은술) 고명 시금치 10g(3줄기)',
        },
    }

    render() {

        return (
            <section className="home">
                <IntroContainer />
                <section className="home__contents">
                    <article>
                        <div>
                            <h2>사람들이 좋아하는 레시피</h2>
                        </div>
                        <div>
                            <div>
                                <img src={this.state.baseData.titleImageS}/>
                                <h3>{this.state.baseData.title}</h3>
                            </div>
                        </div>
                    </article>
                </section>
            </section>
        )
    }
}

export default HomeContainer;