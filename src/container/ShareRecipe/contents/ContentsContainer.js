import React, { Component } from 'react';

import './ContentsContainer.scss';
import Top from '../../../component/ShareRecipe/contents/Top';
import Info from '../../../component/ShareRecipe/contents/Info';
import Step from '../../../component/ShareRecipe/contents/Step';


class ContentsContainer extends Component {

    render() {
        return (
            <section className="share-recipe__contents">
                <Top />
                <Info />
                <Step />
            </section>
        )
    }
}

export default ContentsContainer;