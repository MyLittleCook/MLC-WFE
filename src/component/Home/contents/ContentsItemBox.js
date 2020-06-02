import React from 'react';
import { Link } from 'react-router-dom';

import './ContentsItemBox.scss';

const ContentsItemBox = ({ src, txt }) => {
    return (
        <figure className="box">
            <img src={src}/>
            <figcaption className="box__txt">
                <h3 className="box__txt__title">{txt.title}</h3>
                <p className="box__txt__category">{txt.category}</p>
                <p className="box__txt__madeby">Recipe By {txt.madeBy}</p>
            </figcaption>
            
        </figure>
    )
}

export default ContentsItemBox;