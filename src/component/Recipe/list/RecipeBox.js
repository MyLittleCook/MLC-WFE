import React from 'react';

import './RecipeBox.scss';

const RecipeBox = ({ titleImage, title, category, madeBy, type }) => {
    return (
        <a className="recipe__list__wrapper__contents__recipe-box">
            <div className="recipe__list__wrapper__contents__recipe-box__img">
                <img src={titleImage}/>
            </div>
            <div className="recipe__list__wrapper__contents__recipe-box__txt">
                <h4 className="recipe__list__wrapper__contents__recipe-box__txt__title">{title}</h4>
                <p className={"recipe__list__wrapper__contents__recipe-box__txt__category type-" + type}>{category}</p>
                <p className="recipe__list__wrapper__contents__recipe-box__txt__madeby">{`RecipeBy ${madeBy}`}</p>
            </div>
        </a>
    )
}

export default RecipeBox;