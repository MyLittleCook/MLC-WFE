import React, { Component } from 'react';
import axios from 'axios';

import './ListContainer.scss'
import ListWrapper from '../../../component/Recipe/list/ListWrapper';
import RecipeBox from '../../../component/Recipe/list/RecipeBox';

class ListContainer extends Component {
    state = {
        start: 0,
    }

    getData = () => {
        axios.get('https://picsum.photos/list')
        .then((response) => {
            console.log(response);
            let result = response.data.slice(this.state.start, this.state.end);
            this.setState
        })
        .catch((request) => {
            
        })
    }

    render() {
        const { recipeList } = this.props;
        
        const recipeBox = recipeList.map((data, i) => <RecipeBox titleImage={data.titleImageS} title={data.title} category={data.category} madeBy={data.madeBy} type={data.type} key={i}/>);

        // let photosList = this.getData();
        // console.log(photosList);

        // let recipeBox = photosList.map((data, i) => <RecipeBox titleImage={data.post_url} title={data.id} category={data.format} madeBy={data.author} type={0} key={i}/>)


        return (
            <section className="list">
                <ListWrapper recipes={recipeBox}/>
            </section>
        )
    }
}

export default ListContainer;