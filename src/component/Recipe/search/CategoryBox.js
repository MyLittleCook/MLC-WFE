import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setRecipeCategory } from '../../../actions/index.js';

import './CategoryBox.scss';

class CategoryBox extends Component {
    categoryClicked = (v) => {
        const { setRecipeCategory } = this.props;

        setRecipeCategory(v);
    }

    render() {
        const { icon, icon_C, txt, name, category } = this.props;

        return (
            <a className={`recipe__search__category__box recipe__search__category__box-${name} ` + (category === txt ? `recipe__search__category__box--clicked` : '')} onClick={() => this.categoryClicked(txt)}>
                <div>
                    <img className="box__icon" src={icon}/>
                    <img className="box__iconC" src={icon_C}/>
                </div>
                <p>{txt}</p>
            </a>
        )
    }
}

const mapStateToProps = state => ({
    category: state.recipe.recipeCategory
})

const mapDispatchToProps = dispatch => ({
    setRecipeCategory: text => dispatch(setRecipeCategory(text))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryBox);