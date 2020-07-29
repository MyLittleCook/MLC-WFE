import React from 'react';
import axios from 'axios';

import './Info.scss';

import heart from '../../../assets/icon/heart.png';
import heart_C from '../../../assets/icon/heart_C.png';

const Info = ({ recipeImage, title, category, ingredients, nickname, likes, isLiked, id }) => {
    return (
        <article className="detail-recipe__info">
            <div className="detail-recipe__info__img">
                <img src={recipeImage}/>
            </div>
            <div className="detail-recipe__info__txt">
                <h1 className="detail-recipe__info__txt__title">{title}</h1>
                <h3 className="detail-recipe__info__txt__category">{category}</h3>
                <h2 className="detail-recipe__info__txt__ingredient">재료</h2>
                <div className="detail-recipe__info__txt__ingredient-box">{ingredients}</div>
                <div className="detail-recipe__info__txt__recike">
                    <p className="detail-recipe__info__txt__recipe-by">{`Recipe by ${nickname}`}</p>
                    <a className="detail-recipe__info__txt__like">
                        <img src={isLiked ? heart_C : heart}/>
                        <p>{likes}</p>
                    </a>
                </div>
            </div>
        </article>
    )
}

export default Info;