import React from 'react';

import './CategoryBox.scss';

const CategoryBox = ({ icon, icon_C, txt, name }) => {
    return (
        <div className={'box index' + name}>
            <div>
                <img className="box__icon" src={icon}/>
                <img className="box__iconC" src={icon_C}/>
            </div>
            <p>{txt}</p>
        </div>
    )
}

export default CategoryBox;