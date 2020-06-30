import React, { Component } from 'react';

import ContentsContainer from './contents/ContentsContainer';

class ShareRecipe extends Component {
    render() {
        return (
            <section className="share-recipe">
                <ContentsContainer />
            </section>
        )
    }
}

export default ShareRecipe;