import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { addRecipeList } from '../../../actions/index.js';

import './ListContainer.scss';
import ListWrapper from '../../../component/Recipe/list/ListWrapper';
import RecipeBox from '../../../component/Recipe/list/RecipeBox';

class ListContainer extends Component {
    state = {
        recipePage: 1,
        loadingData: false
    }

    list = [];

    componentDidMount() {
        this.getData();
        window.addEventListener("scroll", this.loadMoreData);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.loadMoreData);
    }

    loadMoreData = () => {
        const { loadingData } = this.state;
        const { scrollHeight, clientHeight, scrollTop } = document.documentElement;

        if(scrollHeight - clientHeight - scrollTop <= 400 && !loadingData) {
            this.setState({
                loadingData: true
            })
            this.getData();
        }
    }

    getData = () => {
        const { addRecipeList } = this.props;

        // axios.get('https://picsum.photos/list')
        // .then((response) => {
        //     let result = response.data.slice(this.state.recipePage, this.state.recipePage+20);
        //     result.forEach(d => {
        //         this.list.push(d);
        //     });
        //     addRecipeList(this.list);
        //     this.setState({
        //         loadingData: false
        //     })
        // })
        // .catch((request) => {

        // })

        axios.get('https://mlc.janghoseung.com/recipe/list', {
            params: {
                page: this.state.recipePage
            }
        })
        .then((response) => {
            console.log(response.data.result)
            response.data.result.forEach(d => {
                this.list.push(d);
            });
            addRecipeList(this.list);
            this.setState({
                recipePage: this.state.recipePage+1,
                loadingData: false
            })
        })
        .catch((reject) => {
            // alert(reject)
        })
    }

    render() {
        const { recipeListArray } = this.props;

        // let recipeBox = recipeListArray.map((data, i) => <RecipeBox titleImage={`https://picsum.photos/350/300/?image=${data.id}`} title={data.id} category={data.format} madeBy={data.author} type={0} key={i}/>)
        let recipeBox = recipeListArray.map((data, i) => <RecipeBox titleImage={data.recipeImage} title={data.name} category={data.category} madeBy={data.author.nickname} type={data.category === "밥" ? 1 : (data.category === "반찬" ? 2 : (data.category === "국 & 찌개" ? 3 : (data.category === "일품" ? 4 : (data.category === "후식" ? 5 : 6))))} key={i}/>)


        return (
            <section className="recipe__list">
                <ListWrapper recipes={recipeBox}/>
            </section>
        )
    }
}

const mapStateToProps = (state) => ({
    recipeListArray: state.recipe.recipeList
})

const mapDispatchToProps = dispatch => ({
    addRecipeList: recipe => dispatch(addRecipeList(recipe))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListContainer);