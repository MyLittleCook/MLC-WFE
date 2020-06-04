import React, { Component } from 'react';

import SearchContainer from './search/SearchContainer';
import ListContainer from './list/ListContainer';

class RecipeContainer extends Component {

    render() {
        return (
            <section className="recipe">
                <SearchContainer />
                <ListContainer />
            </section>
        )
    }
}

export default RecipeContainer;