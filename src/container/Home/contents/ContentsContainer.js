import React, { Component } from 'react';

import './ContentsContainer.scss'
import Contents from '../../../component/Home/contents/Contents';
import ContentsItemBox from '../../../component/Home/contents/ContentsItemBox'

class ContentsContainer extends Component {
    state = {
        baseData: [
            {
                title: '새우 두부 계란찜',
                category: '반찬',
                calorie: '220kcal',
                madeBy: 'teriyaki',
                titleImageL: 'http://www.foodsafetykorea.go.kr/uploadimg/cook/10_00028_1.png',
                titleImageS: 'http://www.foodsafetykorea.go.kr/uploadimg/cook/10_00028_2.png',
                ingredients: '새우두부계란찜 연두부 75g(3/4모), 칵테일새우 20g(5마리), 달걀 30g(1/2개), 생크림 13g(1큰술), 설탕 5g(1작은술), 무염버터 5g(1작은술) 고명 시금치 10g(3줄기)',
            },
            {
                title: '새우 두부 계란찜',
                category: '반찬',
                madeBy: 'teriyaki',
                titleImageS: 'https://i0.wp.com/post.healthline.com/wp-content/uploads/2019/05/Various_Sandwiches_1296x728-header-1296x728.jpg?w=1155&h=1528',
            },
            {
                title: '새우 두부 계란찜',
                category: '반찬',
                madeBy: 'teriyaki',
                titleImageS: 'https://i0.wp.com/post.healthline.com/wp-content/uploads/2019/05/Various_Sandwiches_1296x728-header-1296x728.jpg?w=1155&h=1528',
            },
            {
                title: '새우 두부 계란찜',
                category: '반찬',
                madeBy: 'teriyaki',
                titleImageS: 'https://i0.wp.com/post.healthline.com/wp-content/uploads/2019/05/Various_Sandwiches_1296x728-header-1296x728.jpg?w=1155&h=1528',
            },
            {
                title: '새우 두부 계란찜',
                category: '반찬',
                madeBy: 'teriyaki',
                titleImageS: 'https://www.expatica.com/app/uploads/sites/5/2020/03/Boeuf-bourguignon-1920x1080.jpg',
            },
            {
                title: '새우 두부 계란찜',
                category: '반찬',
                madeBy: 'teriyaki',
                titleImageS: 'https://i.ndtvimg.com/i/2016-06/chinese-625_625x350_81466064119.jpg',
            }
        ],
    }

    render() {
        const { baseData } = this.state;
        const itemList = baseData.map((data, i) => <ContentsItemBox src={data.titleImageS} txt={{title: data.title, category: data.category, madeBy: data.madeBy}} key={i}/>)
        return (
            <section className="contents">
                <Contents title="사람들이 좋아하는 레시피" itemList={itemList} />
                <Contents title="사람들이 사랑하는 레시피" itemList={itemList} />
                <Contents title="사람들이 많이 찾는 레시피" itemList={itemList} />
                <Contents title="최근에 본 레시피" itemList={itemList} />
            </section>
        )
    }
}

export default ContentsContainer;