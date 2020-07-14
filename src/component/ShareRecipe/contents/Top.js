import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setShareRecipeData } from '../../../actions/index';
import { createAlbum, addPhoto } from '../../../aws-s3-albums';

import './Top.scss';

class Top extends Component {

    shareRecipe = async () => {
        const { shareRecipeDataObj, recipeImage, stepImages } = this.props;
        console.log(shareRecipeDataObj)
        
        let albumName = await createAlbum(shareRecipeDataObj.name);
        setTimeout(() => {
            console.log('last: ', albumName);
        }, 1000)
        

        // if(recipeImage !== null) {
        //     shareRecipeDataObj.recipeImage = ;
        // }
    }

    render() {
        

        return(
            <article className="share-recipe__contents__top">
                <button type="button" onClick={this.shareRecipe}>확인</button>
            </article>
        )
    }
}

const mapStateToProps = state => ({
    shareRecipeDataObj: state.share.shareRecipeData,
    recipeImage: state.imageFile.recipeImageFile,
    stepImages: state.imageFile.stepImageFile
})

const mapDispatchToProps = dispatch => ({
    setShareRecipeData: data => dispatch(setShareRecipeData(data))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Top);