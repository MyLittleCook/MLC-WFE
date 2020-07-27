import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setFridgeModalShow } from '../../../actions/index';
import { toast } from 'react-toastify';

import './FridgeModal.scss';

class FridgeModal extends Component {
    state = {
        name: '',
        info: '',
        shelfLife: ''
    }

    nameChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    infoChange = (e) => {
        this.setState({
            info: e.target.value
        })
    }

    shelfLifeChange = (e) => {
        this.setState({
            shelfLife: e.target.value
        })
        e.currentTarget.type = "text";
    }
    
    addFoodList = () => {
        const { name, info, shelfLife } = this.state;
        const { setFridgeModalShow } = this.props;

        if(name === '') {
            toast.error('이름은 1자리 이상 작성하여야 합니다.');
        } else {
            axios.post('https://mlc.janghoseung.com/fridge/food', {
                name: name,
                info: info,
                shelfLife: shelfLife
            },{
                headers: {
                    Authorization: sessionStorage.getItem('ACT')
                }
            })
            .then(response => {
                setFridgeModalShow({show: false, kind: ''});
            })
            .catch(reject => {
                console.log(reject);
            })
        }
    }
    
    setFoodList = () => {
        const { name, info, shelfLife } = this.state;
        const { setFridgeModalShow, modalKind } = this.props;

        axios.put(`https://mlc.janghoseung.com/fridge/food/${modalKind}`, {
            name: name,
            info: info,
            shelfLife: shelfLife
        },{
            headers: {
                Authorization: sessionStorage.getItem('ACT')
            }
        })
        .then(response => {
            setFridgeModalShow({show: false, kind: ''});
        })
        .catch(reject => {
            console.log(reject);
        })
    }

    render() {
        const { setFridgeModalShow, modalShow, modalKind } = this.props;

        const removeEvent = (e) => {
            e.stopPropagation();
        }
        return (
            <>
            {
            modalShow ?
            <>
                <section className="fridge-modal" onClick={() => setFridgeModalShow({show: false, kind: ''})}>
                    <div className="fridge-modal__box" onClick={removeEvent}>
                        <div className="fridge-modal__box__top">
                        {
                        modalKind === 'add' ?
                        <>
                            <p>음식 / 식재료 추가하기</p>
                            <a onClick={this.addFoodList}>추가</a>
                        </>
                        : (modalKind !== '' ?
                        <>
                            <p>음식 / 식재료 수정하기</p>
                            <a onClick={this.setFoodList}>수정</a>
                        </>
                        : null)
                        }
                        </div>
                        <div className="fridge-modal__box__name">
                            <input type="text" placeholder="이름" onBlur={this.nameChange}/>
                        </div>
                        <div className="fridge-modal__box__info">
                            <textarea placeholder="메모" onBlur={this.infoChange}></textarea>
                        </div>
                        <div className="fridge-modal__box__shelf-life">
                            <input type="text" placeholder="유통기한" onFocus={(e) => e.currentTarget.type="date"} onBlur={this.shelfLifeChange}/>
                        </div>
                    </div>
                </section>
            </>
            :
            null
            }
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    modalShow: state.modal.fridgeModalShow,
    modalKind: state.modal.fridgeModalKind
})

const mapDispatchToProps = dispatch => ({
    setFridgeModalShow: obj => dispatch(setFridgeModalShow(obj))
})

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(FridgeModal);