import React from 'react';
import { Link } from 'react-router-dom';

import './ContentsItemBox.scss';

const ContentsItemBox = ({ src, txt }) => {
    return (
        <figure className="home__contents__container__item__box">
            <img src={src}/>
            <figcaption className="home__contents__container__item__box__txt">
                <h3 className="home__contents__container__item__box__txt__title">{txt.title}</h3>
                <p className="home__contents__container__item__box__txt__category">{txt.category}</p>
                <p className="home__contents__container__item__box__txt__madeby">{`Recipe By ${txt.madeBy}`}</p>
            </figcaption>
            
        </figure>
    )
}

export default ContentsItemBox;