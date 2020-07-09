import React, { Component } from 'react';

import './IngredientModal.scss'

class IngredientModal extends Component {
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
                        <a>완료</a>
                    </div>
                    <div className="ingredient-modal__box__name">
                        <input type="text" placeholder="식재료 이름" />
                    </div>
                    <div className="ingredient-modal__box__description">
                        <textarea placeholder="식재료 설명"></textarea>
                    </div>
                </div>
            </div>
        )
    }
}

export default IngredientModal;