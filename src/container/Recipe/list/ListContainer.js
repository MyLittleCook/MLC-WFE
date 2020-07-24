import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

import './ListContainer.scss';
import ListWrapper from '../../../component/Recipe/list/ListWrapper';
import RecipeBox from '../../../component/Recipe/list/RecipeBox';

class ListContainer extends Component {
    state = {
        recipePage: 1,
        loadingData: false,
        searchFrom: '',
        categoryFrom: ''
    }

    list = [];

    componentDidMount() {
        this.getData();
        window.addEventListener("scroll", this.loadMoreData);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            recipePage: 1,
            loadingData: true,
            searchFrom: nextProps.recipeSearchString,
            categoryFrom: nextProps.recipeCategoryString
        })
        this.list = [];
        this.debounce(this.getData, 200)();
    }

    /*
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.recipeSearchString !== prevState.searchFrom || nextProps.recipeCategoryString !== prevState.categoryFrom) {
            this.list = [];
            this.debounce(this.getData, 200)();
            return { 
                recipePage: 1,
                loadingData: true,
                searchFrom: nextProps.recipeSearchString,
                categoryFrom: nextProps.recipeCategoryString
            };
        }
        return null;
    }
    */

    componentWillUnmount() {
        window.removeEventListener("scroll", this.loadMoreData);
    }

    debounce(callback, milliseconds) {
        let lastTimeoutId = null;
        
        return (...args) => {
            if(lastTimeoutId) {
                clearTimeout(lastTimeoutId);
                lastTimeoutId = null;
            }
            lastTimeoutId = setTimeout(() => {
                callback(...args);
                lastTimeoutId = null;
            }, milliseconds);
        }
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
        const { recipePage, searchFrom, categoryFrom } = this.state;

        let params = {};

        if(searchFrom !== '') {
            params = {
                page: recipePage,
                query: searchFrom
            }
        } else if(categoryFrom !== 'ALL' && categoryFrom !== '') {
            params = {
                page: recipePage,
                category: categoryFrom
            }
        } else {
            params = {
                page: recipePage
            }
        }
        console.log('params: ', params)

        axios.get('https://mlc.janghoseung.com/recipe/list', {
            params: params
        })
        .then((response) => {
            if(response.data.result.length === 0) {
                toast.error("레시피가 더이상 없습니다.");
            } else {
                console.log('response: ', response.data.result)
                response.data.result.forEach(d => {
                    this.list.push(d);
                });
                this.setState({
                    recipePage: recipePage+1,
                    loadingData: false
                })
            }
        })
        .catch((reject) => {
            console.log(reject)
        })
    }

    render() {
        let recipeBox = this.list.map((data, i) => <RecipeBox titleImage={data.recipeImage} title={data.name} category={data.category} madeBy={data.author.nickname} type={data.category === "밥" ? 1 : (data.category === "반찬" ? 2 : (data.category === "국 & 찌개" ? 3 : (data.category === "일품" ? 4 : (data.category === "후식" ? 5 : 6))))} key={i}/>)

        return (
            <section className="recipe__list">
                <ListWrapper recipes={recipeBox}/>
            </section>
        )
    }
}

const mapStateToProps = (state) => ({
    recipeSearchString: state.recipe.recipeSearch,
    recipeCategoryString: state.recipe.recipeCategory
});

export default connect(
    mapStateToProps
)(ListContainer);