import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setFridgeModalShow } from '../../../actions/index';

import './Wrapper.scss';

class Wrapper extends Component {
    state = {
        prevY: 0
    };

    componentDidMount() {
        let options = {
            root: null,
            rootMargin: "0px",
            threshold: 1.0
        };
        this.observer = new IntersectionObserver(
            this.handleObserver.bind(this),
            options
        );
        this.observer.observe(this.loadingRef);
    }
    
    handleObserver(entities) {
        const { loadData } = this.props;

        const y = entities[0].boundingClientRect.y;
        if (this.state.prevY > y) {
            loadData();
        }
        this.setState({
            prevY: y
        });
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
                <div className="fridge__list__contents">
                    <div>
                        {foodList}
                        <div ref={loadingRef => (this.loadingRef = loadingRef)}></div>
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