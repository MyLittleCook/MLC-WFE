import React, { Component } from 'react';

import './SearchContainer.scss';
import Search from '../../../component/Recipe/Search/Search';

import rice from '../../../assets/icon/rice.png';
import sidedish from '../../../assets/icon/sidedish.png';
import stew from '../../../assets/icon/stew.png';
import dish from '../../../assets/icon/dish.png';
import fried from '../../../assets/icon/fried.png';
import bread from '../../../assets/icon/bread.png';
import dessert from '../../../assets/icon/dessert.png';
import rice_C from '../../../assets/icon/rice_C.png';
import sidedish_C from '../../../assets/icon/sidedish_C.png';
import stew_C from '../../../assets/icon/stew_C.png';
import dish_C from '../../../assets/icon/dish_C.png';
import fried_C from '../../../assets/icon/fried_C.png';
import bread_C from '../../../assets/icon/bread_C.png';
import dessert_C from '../../../assets/icon/dessert_C.png';

class SearchContainer extends Component {
    state = {
        categoryList: [
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
                txt: '국 & 찌개'
            },
            {
                name: 'dish',
                icon: dish,
                icon_C: dish_C,
                txt: '일품'
            },
            {
                name: 'fried',
                icon: fried,
                icon_C: fried_C,
                txt: '튀김'
            },
            {
                name: 'bread',
                icon: bread,
                icon_C: bread_C,
                txt: '빵'
            },
            {
                name: 'dessert',
                icon: dessert,
                icon_C: dessert_C,
                txt: '후식'
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