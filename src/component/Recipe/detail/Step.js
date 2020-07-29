import React from 'react';

const Step = ({ stepList }) => {
    return (
        <article className="detail-recipe__step">
            {stepList}
        </article>
    )
}

export default Step;