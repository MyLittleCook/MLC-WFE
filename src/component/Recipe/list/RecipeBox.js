import React from 'react';
import { withRouter } from 'react-router-dom';

import './RecipeBox.scss';

const RecipeBox = ({ recipeImage, title, category, madeBy, type, id, history }) => {
    return (
        <a className="recipe__list__wrapper__contents__recipe-box" onClick={() => history.push(`/recipe/${id}`)}>
            <div className="recipe__list__wrapper__contents__recipe-box__img">
                <img src={recipeImage}/>
            </div>
            <div className="recipe__list__wrapper__contents__recipe-box__txt">
                <h4 className="recipe__list__wrapper__contents__recipe-box__txt__title">{title}</h4>
                <p className={"recipe__list__wrapper__contents__recipe-box__txt__category type-" + type}>{category}</p>
                <p className="recipe__list__wrapper__contents__recipe-box__txt__madeby">{`RecipeBy ${madeBy}`}</p>
            </div>
        </a>
    )
}

export default withRouter(RecipeBox);