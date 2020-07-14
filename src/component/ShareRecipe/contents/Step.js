import React, { Component } from 'react';

import './Step.scss';
import StepBox from './StepBox';

class Step extends Component {
    state = {
        stepList: [<StepBox stepId={1} key={1}/>]
    }

    render() {
        const { stepList } = this.state;
        const addStep = () => {
            this.setState({
                stepList: [...stepList, <StepBox stepId={stepList.length+1} key={stepList.length+1}/>]
            })
            
        }
        return(
            <article className="share-recipe__contents__step">
                <div className="share-recipe__contents__step__list">
                    {stepList}
                </div>
                <div className="share-recipe__contents__step__add">
                    <button onClick={addStep}>+ Step 추가하기</button>
                </div>
            </article>
        )
    }
}

export default Step;