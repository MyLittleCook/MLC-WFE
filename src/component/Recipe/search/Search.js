import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './Search.scss';
import './CategoryBox.scss';

import searchIcon from '../../../assets/icon/search.png'

class CategoryBox extends Component {
    render() {
        const { icon, icon_C, txt, name, onSubmit } = this.props;

        const categoryClicked = () => {
            setTimeout(() => {
                let path = window.location.pathname;
                onSubmit(path.substring(path.lastIndexOf("/recipe/")+8, path.length));
            }, 0)
        }

        return (
            <NavLink to={'/recipe/' + name} className={'box index' + name} activeClassName={'click' + name} onClick={categoryClicked}>
                <div>
                    <img className="box__icon" src={icon}/>
                    <img className="box__iconC" src={icon_C}/>
                </div>
                <p>{txt}</p>
            </NavLink>
        )
    }
}

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

    render() {
        const { inputClicked } = this.state;
        const { categoryList, onSubmit } = this.props;

        const inputEnter = (e) => {
            if(e.key === 'Enter') {
                onSubmit(e.target.value);
            }
        }

        const changeCategory = (e) => {
            onSubmit(e);
        }

        const category = categoryList.map((data, i) => <CategoryBox icon={data.icon} icon_C={data.icon_C} txt={data.txt} name={data.name} onSubmit={changeCategory} key={i}/>);

        return (
            <>
                <article className="bar">
                    <div className={inputClicked ? 'bar--clicked' : 'bar--unclicked'}  onClick={this.inputClick} onBlur={this.inputClickOut}>
                        <img src={searchIcon}/>
                        <input id="recipeSerchInput" type="text" placeholder={inputClicked ? '검색하실 레시피를 적어주세요.' : ''} onKeyDown={inputEnter}/>
                    </div>
                </article>
                <article className="category">
                    <div>
                        {category}
                    </div>
                </article>
            </>
        )
    }
}

export default Search;