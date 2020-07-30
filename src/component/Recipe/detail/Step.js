import React from 'react';

import './Step.scss';

const Step = ({ stepList }) => {
    return (
        <article className="detail-recipe__step">
            {stepList}
        </article>
    )
}

export default Step;