import React from 'react';
import { Link } from 'react-router-dom';

import './Intro.scss';

const Intro = ({contents, imgSrc}) => {
    return (
        <>
            <div className="text">
                <h1 className="text__title">My Little cook<br />당신만을 위한 레시피</h1>
                <p className="text__main">{contents.text}</p>
                <Link className="text__btn" to={contents.to}>{contents.btn}</Link>
            </div>
            <img className="bg" src={imgSrc}/>
        </>
    )
}

export default Intro;