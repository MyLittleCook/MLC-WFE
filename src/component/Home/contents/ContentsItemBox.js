import React from 'react';

const ContentsItemBox = ({ src, txt }) => {
    return (
        <figure className="home__contents__container__item__box">
            <img src={src}/>
            <figcaption className="home__contents__container__item__box__txt">
                <h3>{txt.title}</h3>
                <p>{txt.category}</p>
                <p>Recipe By {txt.madeBy}</p>
            </figcaption>
        </figure>
    )
}

export default ContentsItemBox;