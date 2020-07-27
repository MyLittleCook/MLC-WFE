import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setFridgeModalShow } from '../../../actions/index';
import { toast } from 'react-toastify';

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

    deleteBox = (e, id) => {
        e.stopPropagation();

        axios.delete(`https://mlc.janghoseung.com/fridge/food/${id}`, {
            headers: {
                Authorization: sessionStorage.getItem('ACT')
            }
        })
        .then((response) => {
            toast.success("성공적으로 삭제되었습니다.");
        })
        .catch((reject) => {
            console.log(reject);
        })
    }

    render() {
        const { showDetail } = this.state;
        const { name, info, shelfLife, id, setFridgeModalShow } = this.props;
        return (
            <div className={"fridge__list__contents__box " + (showDetail ? 'fridge__list__contents__box--clicked' : '')}>
                <div className="fridge__list__contents__box__simple"  onClick={id !== undefined ? this.contentsClicked : null}>
                    <p className="fridge__list__contents__box__simple__name">{name}</p>
                    <p className="fridge__list__contents__box__simple__info">{info}</p>
                    <p className="fridge__list__contents__box__simple__shelf-life">{shelfLife}</p>
                    {id !== undefined ? <div className="fridge__list__contents__box__simple__delete" onClick={(e) => this.deleteBox(e, id)}></div> : null}
                </div>
                <div className="fridge__list__contents__box__detail">
                    <p className="fridge__list__contents__box__detail__name">{name}</p>
                    <p className="fridge__list__contents__box__detail__info">{info}</p>
                    <p className="fridge__list__contents__box__detail__shelf-life">{shelfLife}</p>
                    <a className="fridge__list__contents__box__detail__change" onClick={() => setFridgeModalShow({show: true, kind: id})}>수정</a>
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
)(Box);