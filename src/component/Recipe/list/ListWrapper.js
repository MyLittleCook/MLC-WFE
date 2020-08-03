import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setRecipeView } from '../../../actions/index';
import { toast } from 'react-toastify';

import './ListWrapper.scss'

class ListWrapper extends Component {
    state = {
        recipeView: 'card'
    }
    
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.recipeView !== prevState) {
            return { 
                recipeView: nextProps.recipeView
            };
        }
        return null;
    }

    changeView = () => {
        const { recipeView } = this.state;
        const { setRecipeView } = this.props;

        if(recipeView === 'list') {
            setRecipeView('card');
            toast.info('Card View', { autoClose: 3000 });
        } else {
            setRecipeView('list');
            toast.info('List View', { autoClose: 3000 });
        }
    }

    render() {
        const { recipeView } = this.state;
        const { recipes } = this.props;
        return (
            <div className="recipe__list__wrapper">
                <article className="recipe__list__wrapper__top">
                    <a className="recipe__list__wrapper__top__newest">최신순</a>
                    <a className="recipe__list__wrapper__top__like">좋아요순</a>
                    <div className={`recipe__list__wrapper__top__${recipeView}`} onClick={this.changeView}>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </article>
                <article className={`recipe__list__wrapper__contents recipe__list__wrapper__contents--${recipeView}`}>
                    {recipes}
                </article>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    recipeView: state.recipe.recipeView
})

const mapDispatchToProps = dispatch => ({
    setRecipeView: type => dispatch(setRecipeView(type))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListWrapper);