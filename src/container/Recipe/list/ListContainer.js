import React, { Component } from 'react';

import ListWrapper from '../../../component/Recipe/list/ListWrapper';
import RecipeBox from '../../../component/Recipe/list/RecipeBox';

class ListContainer extends Component {
    render() {
        const { recipeList } = this.props;
        return (
            <section className="list">
                <ListWrapper />
            </section>
        )
    }
}

export default ListContainer;