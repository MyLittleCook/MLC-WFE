import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setRecipeSearch } from '../../../actions/index.js';

import './Search.scss';
import CategoryBox from './CategoryBox'

import searchIcon from '../../../assets/icon/search.png'

class Search extends Component {
    state = {
        inputClicked: false
    }
    
    inputClick = () => {
        this.setState({
            inputClicked: true
        })
        document.getElementById('recipeSerchInput').focus();
    }

    inputClickOut = () => {
        this.setState({
            inputClicked: false
        })
        document.getElementById('recipeSerchInput').blur();
    }

    inputEnter = (e) => {
        const { setRecipeSearch } = this.props;

        if(e.key === 'Enter') {
            setRecipeSearch(e.target.value);
        }
    }

    render() {
        const { inputClicked } = this.state;
        const { categoryList } = this.props;

        const category = categoryList.map((data, i) => <CategoryBox icon={data.icon} icon_C={data.icon_C} txt={data.txt} name={data.name} key={i}/>);

        return (
            <>
                <article className="recipe__search__bar">
                    <div className={`recipe__search__${inputClicked ? 'bar--clicked' : 'bar--unclicked'}`}  onClick={this.inputClick} onBlur={this.inputClickOut}>
                        <img src={searchIcon}/>
                        <input id="recipeSerchInput" type="text" placeholder={inputClicked ? '검색하실 레시피를 적어주세요.' : ''} onKeyDown={this.inputEnter} autoComplete="off"/>
                    </div>
                </article>
                <article className="recipe__search__category">
                    <div>
                        {category}
                    </div>
                </article>
            </>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    setRecipeSearch: text => dispatch(setRecipeSearch(text))
})

export default connect(
    undefined,
    mapDispatchToProps
)(Search);