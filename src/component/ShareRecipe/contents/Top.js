import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setShareRecipeData } from '../../../actions/index';
import { createAlbum, addPhoto } from '../../../aws-s3-albums';
import { toast } from 'react-toastify';

import './Top.scss';

class Top extends Component {

    shareRecipe = () => {
        const { shareRecipeDataObj, recipeImage, stepImages } = this.props;

        if(shareRecipeDataObj.name < 1) {
            toast.warn("레시피 이름은 1글자 이상이여야 합니다.");
        } else {
            let albumName = createAlbum(shareRecipeDataObj.name);
            
            let mainImage = new File([recipeImage], `${albumName}_0`, {
                type: recipeImage.type,
                lastModified: recipeImage.lastModified
            })
    
            addPhoto(albumName, mainImage).then(url => {
                shareRecipeDataObj.recipeImage = url;
            })
            
            stepImages.forEach((v, i) => {
                let stepImage = new File([v], `${albumName}_${i+1}`, {
                    type: v.type,
                    lastModified: v.lastModified
                })
                addPhoto(albumName, stepImage).then(url => {
                    shareRecipeDataObj.steps[i].stepImage = url;
                });
            });
            console.log(shareRecipeDataObj);
        }
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