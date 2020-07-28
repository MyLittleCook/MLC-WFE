import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setFridgeModalShow } from '../../../actions/index';
import { toast } from 'react-toastify';

import './Box.scss'

class Box extends Component {
    state = {
        deleted: false,
        showDetail: false,
        shelfLifeSimple: ''
    }

    componentDidMount() {
        const { shelfLife } = this.props;
        const today = new Date();

        let shelfLifeSimple = '';

        console.log

        if(!shelfLife) {
            shelfLifeSimple = '유통기한 등록 X';
        } else {
            let sLY = shelfLife.slice(0, shelfLife.indexOf('-'));
            let sLM = shelfLife.slice(shelfLife.indexOf('-')+1, shelfLife.lastIndexOf('-'));
            let sLD = shelfLife.slice(shelfLife.lastIndexOf('-')+1, shelfLife.length);

            let tDY = today.getFullYear();
            let tDM = today.getMonth()+1;
            let tDD = today.getDate();

            if(sLY - tDY > 0) {
                shelfLifeSimple = `${sLY - tDY}년 남음`;
            } else if(sLY - tDY < 0) {
                shelfLifeSimple = `${tDY - sLY}년 지남`;
            } else if(sLM - tDM > 0) {
                shelfLifeSimple = `${sLM - tDM}달 남음`;
            } else if(sLM - tDM < 0) {
                shelfLifeSimple = `${tDM - sLM}달 지남`;
            } else if(sLD - tDD > 0) {
                shelfLifeSimple = `${sLD - tDD}일 남음`;
            } else if(sLD - tDD < 0) {
                shelfLifeSimple = `${tDD - sLD}일 지남`;
            } else if (sLD - tDD === 0) {
                shelfLifeSimple = '오늘까지';
            }
                
        }

        this.setState({
            shelfLifeSimple: shelfLifeSimple
        })
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
            this.setState({
                deleted: true
            })
        })
        .catch((reject) => {
            toast.warning("삭제를 실패하였습니다.");
            console.log(reject);
        })
    }

    render() {
        const { deleted, showDetail, shelfLifeSimple } = this.state;
        const { name, info, shelfLife, id, setFridgeModalShow } = this.props;
        return (
            <>
            {
            !deleted ?
            <>
                <div className={"fridge__list__contents__box " + (showDetail ? 'fridge__list__contents__box--clicked' : '')}>
                {
                id !== 'noMoreList' ?
                <>
                    <div className="fridge__list__contents__box__simple"  onClick={this.contentsClicked}>
                        <p className="fridge__list__contents__box__simple__name">{name}</p>
                        <p className="fridge__list__contents__box__simple__info">{info}</p>
                        <p className="fridge__list__contents__box__simple__shelf-life">{shelfLifeSimple}</p>
                        <div className="fridge__list__contents__box__simple__delete" onClick={(e) => this.deleteBox(e, id)}></div>
                    </div>
                    <div className="fridge__list__contents__box__detail">
                        <p className="fridge__list__contents__box__detail__name">{name}</p>
                        <p className="fridge__list__contents__box__detail__info">{info}</p>
                        <p className="fridge__list__contents__box__detail__shelf-life">{shelfLife}</p>
                        <a className="fridge__list__contents__box__detail__change" onClick={() => setFridgeModalShow({show: true, kind: id})}>수정</a>
                    </div>
                    
                </>
                :
                <div className="fridge__list__contents__box__end">{name}</div>
                }
                </div>
            </>
            :
            null
            }
            </>
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