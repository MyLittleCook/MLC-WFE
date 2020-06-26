import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { addRecipeList } from '../../../actions/index.js';

import './ListContainer.scss'
import ListWrapper from '../../../component/Recipe/list/ListWrapper';
import RecipeBox from '../../../component/Recipe/list/RecipeBox';

class ListContainer extends Component {
    state = {
        recipePage: 0,
        loadingData: false
    }
    
    scrollArea = React.createRef();

    componentDidMount() {
        const { current } = this.scrollArea.current;
        this.getData()
    }

    getData = () => {
        const { addRecipeList } = this.props;
        axios.get('https://picsum.photos/list')
        .then((response) => {
            console.log(response);
            let result = response.data.slice(this.state.start, this.state.start+20);
            addRecipeList(result);
        })
        .catch((request) => {

        })
    }

    render() {
        const { recipeList } = this.props;
        
        const recipeBox = recipeList.map((data, i) => <RecipeBox titleImage={data.titleImageS} title={data.title} category={data.category} madeBy={data.madeBy} type={data.type} key={i}/>);

        // let photosList = this.getData();

        // let recipeBox = photosList.map((data, i) => <RecipeBox titleImage={data.post_url} title={data.id} category={data.format} madeBy={data.author} type={0} key={i}/>)


        return (
            <section className="list">
                <ListWrapper recipes={recipeBox}/>
            </section>
        )
    }
}

const mapStateToProps = (state) => ({
    titleImage: state.recipeList,
    title: state.recipeList,
    category: state.recipeList,
    madeBy: state.recipeList,
    type: state.recipeList
})

const mapDispatchToProps = dispatch => ({
    addRecipeList: recipeList => dispatch(addRecipeList(recipeList))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListContainer);