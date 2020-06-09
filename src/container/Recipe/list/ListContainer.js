import React, { Component } from 'react';

import './ListContainer.scss'
import ListWrapper from '../../../component/Recipe/list/ListWrapper';
import RecipeBox from '../../../component/Recipe/list/RecipeBox';

class ListContainer extends Component {
    render() {
        const { recipeList } = this.props;
        
        const recipeBox = recipeList.map((data, i) => <RecipeBox titleImage={data.titleImageS} title={data.title} category={data.category} madeBy={data.madeBy} key={i}/>);

        return (
            <section className="list">
                <ListWrapper recipes={recipeBox}/>
            </section>
        )
    }
}

export default ListContainer;