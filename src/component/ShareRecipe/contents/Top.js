import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setShareRecipeData } from '../../../actions/index';

import './Top.scss';

class Top extends Component {

    addIngredient = () => {
        const { shareRecipeDataObj } = this.props;
        console.log(shareRecipeDataObj)
    }

    render() {
        return(
            <article className="share-recipe__contents__top">
                <button type="button" onClick={this.addIngredient}>확인</button>
            </article>
        )
    }
}

const mapStateToProps = (state) => ({
    shareRecipeDataObj: state.share.shareRecipeData
})

const mapDispatchToProps = dispatch => ({
    setShareRecipeData: data => dispatch(setShareRecipeData(data))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Top);