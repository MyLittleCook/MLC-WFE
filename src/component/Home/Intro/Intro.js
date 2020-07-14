import React from 'react';
import { Link } from 'react-router-dom';

import './Intro.scss';

const Intro = ({contents, imgSrc}) => {
    return (
        <>
            <div className="home__intro__text">
                <h1 className="home__intro__text__title">My Little Cook<br />당신만을 위한 레시피</h1>
                <p className="home__intro__text__main">{contents.text}</p>
                <Link className="home__intro__text__btn" to={contents.to}>{contents.btn}</Link>
            </div>
            <img className="home__intro__bg" src={imgSrc}/>
        </>
    )
}

export default Intro;