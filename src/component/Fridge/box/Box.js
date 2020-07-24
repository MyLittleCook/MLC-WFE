import React, { Component } from 'react';

import './Box.scss'

class Box extends Component {
    state = {
        showDetail: false
    }

    contentsClicked = () => {
        const { showDetail } = this.state;

        if(showDetail) {
            this.setState({
                showDetail: false
            })
        } else {
            this.setState({
                showDetail: true
            })
        }
    }

    render() {
        const { showDetail } = this.state;
        const { name, info, shelfLife } = this.props;
        return (
            <div className={"fridge__list__contents__box " + (showDetail ? 'fridge__list__contents__box--clicked' : '')}>
                <div className="fridge__list__contents__box__simple"  onClick={this.contentsClicked}>
                    <p className="fridge__list__contents__box__simple__name">{name}</p>
                    <p className="fridge__list__contents__box__simple__info">{info}</p>
                    <p className="fridge__list__contents__box__simple__shelf-life">{shelfLife}</p>
                    <div className="fridge__list__contents__box__simple__delete"></div>
                </div>
                <div className="fridge__list__contents__box__detail">
                    <p className="fridge__list__contents__box__detail__name">{name}</p>
                    <p className="fridge__list__contents__box__detail__info">{info}</p>
                    <p className="fridge__list__contents__box__detail__shelf-life">{shelfLife}</p>
                    <a className="fridge__list__contents__box__detail__change">수정</a>
                </div>
            </div>
        )
    }
}

export default Box;