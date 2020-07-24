import React, { Component } from 'react';

import './Wrapper.scss';

class Wrapper extends Component {
    render() {
        const { list } = this.props
        return (
            <div className="fridge__list__wrapper">
                <div className="fridge__list__top">
                    <p className="fridge__list__top__name">이름</p>
                    <p className="fridge__list__top__info">메모</p>
                    <p className="fridge__list__top__shelf-life">남은 유통기한</p>
                    <div className="fridge__list__top__add-button"></div>
                </div>
                <div className="fridge__list__contents">
                    <div>
                        {list}
                    </div>
                </div>
            </div>
        )
    }
}

export default Wrapper;