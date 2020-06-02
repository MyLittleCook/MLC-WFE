import React from 'react';
import './Contents.scss';

const Contents = ({ title, itemList }) => {
    return (
        <article className="container">
            <div className="container__title">
            <h2>{title}</h2>
            </div>
            <div className="container__item">
                {itemList}
            </div>
        </article>
    )
}

export default Contents;