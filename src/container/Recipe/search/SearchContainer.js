import React, { Component } from 'react';

import './SearchContainer.scss';
import Search from '../../../component/Recipe/Search/Search';

import all from '../../../assets/icon/all.png';
import rice from '../../../assets/icon/rice.png';
import sidedish from '../../../assets/icon/sidedish.png';
import stew from '../../../assets/icon/stew.png';
import dish from '../../../assets/icon/dish.png';
import dessert from '../../../assets/icon/dessert.png';
import etc from '../../../assets/icon/etc.png';
import all_C from '../../../assets/icon/all_C.png';
import rice_C from '../../../assets/icon/rice_C.png';
import sidedish_C from '../../../assets/icon/sidedish_C.png';
import stew_C from '../../../assets/icon/stew_C.png';
import dish_C from '../../../assets/icon/dish_C.png';
import dessert_C from '../../../assets/icon/dessert_C.png';
import etc_C from '../../../assets/icon/etc_C.png';

class SearchContainer extends Component {
    state = {
        categoryList: [
            {
                name: 'all',
                icon: all,
                icon_C: all_C,
                txt: 'ALL'
            },
            {
                name: 'rice',
                icon: rice,
                icon_C: rice_C,
                txt: '밥',
            },
            {
                name: 'sidedish',
                icon: sidedish,
                icon_C: sidedish_C,
                txt: '반찬'
            },
            {
                name: 'stew',
                icon: stew,
                icon_C: stew_C,
                txt: '국&찌개'
            },
            {
                name: 'dish',
                icon: dish,
                icon_C: dish_C,
                txt: '일품'
            },
            {
                name: 'dessert',
                icon: dessert,
                icon_C: dessert_C,
                txt: '후식'
            },
            {
                name: 'etc',
                icon: etc,
                icon_C: etc_C,
                txt: '기타'
            },
        ]
    }

    render() {
        const { categoryList } = this.state;
        
        return (
            <section className="recipe__search">
                <Search categoryList={categoryList}/>
            </section>
        )
    }
}

export default SearchContainer;