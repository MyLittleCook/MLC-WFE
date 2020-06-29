import React from 'react';
import './Contents.scss';

const Contents = ({ title, itemList }) => {
    return (
        <article className="home__contents__container">
            <div className="home__contents__container__title">
            <h2>{title}</h2>
            </div>
            <div className="home__contents__container__item">
                {itemList}
            </div>
        </article>
    )
}

export default Contents;