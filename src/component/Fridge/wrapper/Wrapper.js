import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setFridgeModalShow } from '../../../actions/index';

import './Wrapper.scss';

class Wrapper extends Component {
    listScrolled = (e) => {
        console.log('scrollTop: ',e);
        // console.log('scroll: ', e.srcElement.body);
    }

    render() {
        const { foodList, setFridgeModalShow } = this.props
        return (
            <div className="fridge__list__wrapper">
                <div className="fridge__list__top">
                    <p className="fridge__list__top__name">이름</p>
                    <p className="fridge__list__top__info">메모</p>
                    <p className="fridge__list__top__shelf-life">남은 유통기한</p>
                    <div className="fridge__list__top__add-button" onClick={() => setFridgeModalShow({show: true, kind: 'add'})}></div>
                </div>
                <div className="fridge__list__contents" onScroll={this.listScrolled}>
                    <div>
                        {foodList}
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    setFridgeModalShow: obj => dispatch(setFridgeModalShow(obj))
})

export default connect (
    undefined,
    mapDispatchToProps
)(Wrapper);