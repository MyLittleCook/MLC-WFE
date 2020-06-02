import React, { Component } from 'react';

import './IntroContainer.scss';
import Intro from '../../../component/Home/Intro/Intro';

import homeImg_0 from '../../../assets/img/homeImg_0.jpg';
import homeImg_1 from '../../../assets/img/homeImg_1.jpg';
import homeImg_2 from '../../../assets/img/homeImg_2.jpg';
import homeImg_3 from '../../../assets/img/homeImg_3.jpg';
import homeImg_4 from '../../../assets/img/homeImg_4.jpg';

class IntroContainer extends Component {

    state = {
        contents: [
            {
                text: '일단 아무 텍스트나 적는다 다양한 사람들의 다양한 레시피들을 만나보세요.',
                btn: '레시피 보러가기',
                to: '/recipe'
            },
            {
                text: '당신의 식재료를 한눈에 관리하고 이상적인 레시피들을 만나보세요.',
                btn: '식재료 관리하러 가기',
                to: '/fridge'
            },
            {
                text: '일단 아무 텍스트나 적는다 여러분들의 특색있는 레시피들을 공유해주세요.',
                btn: '레시피 공유하러 가기',
                to: '/shareRecipe'
            },
            {
                text: '일단 아무 텍스트나 적는다 요리하는데 다른 사람에게 공유하고싶은 정보가 있으신가요? 다른 사용자들과 함께 나눠봐요.',
                btn: '커뮤니티로 가기',
                to: '/community'
            },
        ],
        homeImg: [
            homeImg_0,
            homeImg_1,
            homeImg_2,
            homeImg_3,
            homeImg_4
        ],
    }

    render() {
        const { contents, homeImg } = this.state;
        return (
            <section className="intro">
                <Intro contents={contents[Math.floor(Math.random() * contents.length)]} imgSrc={homeImg[Math.floor(Math.random() * homeImg.length)]}/>
            </section>
        )
    }
}

export default IntroContainer;