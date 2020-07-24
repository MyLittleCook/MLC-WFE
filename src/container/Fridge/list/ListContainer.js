import React, { Component } from 'react';
import axios from 'axios';

import './ListContainer.scss'
import Box from '../../../component/Fridge/box/Box';
import Wrapper from '../../../component/Fridge/wrapper/Wrapper';

class ListContainer extends Component {
    state = {
        data: [
            {
                id: '0',
                name : '김치',
                info : '할머니가 해주신 묶은지',
                shelfLife: '2020-08-05'
            },
            {
                id: '1',
                name : '사과',
                info : '최대한 빨리 먹기',
                shelfLife: '2020-08-07'
            }
        ]
    }
    render() {
        const list = this.state.data.map((v) => <Box name={v.name} info={v.info} shelfLife={v.shelfLife} key={v.id}/>);
        return (
            <section className="fridge__list">
                <Wrapper list={list}/>
            </section>
        )
    }
}

export default ListContainer;