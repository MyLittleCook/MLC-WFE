import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setShareRecipeData } from '../../../actions/index';

import './IngredientModal.scss'

class IngredientModal extends Component {
    state = {
        ingredientName: '',
        ingredientDes: ''
    }

    ingredientNameChanged = (e) => {
        this.setState({
            ingredientName: e.target.value
        })
    }

    ingredientDesChanged = (e) => {
        this.setState({
            ingredientDes: e.target.value
        })
    }

    addIngredient = () => {
        const { ingredientName, ingredientDes } = this.state;
        const { shareRecipeDataObj, openIngredientModal } = this.props;
        shareRecipeDataObj.ingredients.push({name:ingredientName,detail:ingredientDes});
        openIngredientModal(false);
    }

    render() {
        const { openIngredientModal } = this.props;

        const removeEvent = (e) => {
            e.stopPropagation();
        }

        return (
            <div className="ingredient-modal" onClick={() => {openIngredientModal(false)}}>
                <div className="ingredient-modal__box" onClick={removeEvent}>
                    <div className="ingredient-modal__box__top">
                        <p>재료 추가하기</p>
                        <a onClick={this.addIngredient}>완료</a>
                    </div>
                    <div className="ingredient-modal__box__name">
                        <input type="text" placeholder="식재료 이름" onBlur={this.ingredientNameChanged}/>
                    </div>
                    <div className="ingredient-modal__box__description">
                        <textarea placeholder="식재료 설명" onBlur={this.ingredientDesChanged}></textarea>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    shareRecipeDataObj: state.share.shareRecipeData
})

export default connect(
    mapStateToProps
)(IngredientModal);