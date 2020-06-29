import React, { Component } from 'react';

import './ListWrapper.scss'

class ListWrapper extends Component {
    render() {
        const { recipes } = this.props;
        return (
            <div className="recipe__list__wrapper">
                <article className="recipe__list__wrapper__top">
                    <a className="recipe__list__wrapper__top__newest">최신순</a>
                    <a className="recipe__list__wrapper__top__like">좋아요순</a>
                    <div className="recipe__list__wrapper__top__card">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className="recipe__list__wrapper__top__list">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </article>
                <article className="recipe__list__wrapper__contents">
                    {recipes}
                </article>
            </div>
        )
    }
}

export default ListWrapper;