import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { setShareRecipeData } from '../../../actions/index';
import { toast } from 'react-toastify';
import { addPhoto } from '../../../aws-s3-albums';

import './Top.scss';

class Top extends Component {
    state = {
        titleImage: ''
    }

    shareRecipe = async () => {
        const { shareRecipeDataObj, recipeImage } = this.props;

        if(!recipeImage) {
            toast.warn("메인 사진이 필요 합니다.");
        } else if(shareRecipeDataObj.name.length < 1) {
            toast.warn("레시피 이름은 1글자 이상이여야 합니다.");
        } else if(shareRecipeDataObj.name.length > 20) {
            toast.warn("레시피 이름은 20글자 미만이여야 합니다.");
        } else {
            if(shareRecipeDataObj.recipeImage === '') {
                await this.changeFileToUrl();
            }
            this.uploadRecipe();
        }
    }

    changeFileToUrl = async () => {
        const { shareRecipeDataObj, recipeImage, stepImages } = this.props;
        // let albumName = createAlbum(shareRecipeDataObj.name);
        let date = new Date();
        let recipeName = shareRecipeDataObj.name;
        let albumName = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}-${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}_${recipeName.trim().replace(/ /g, "_")}`;
        let mainImage = new File([recipeImage], `${albumName}_0`, {
            type: recipeImage.type,
            lastModified: recipeImage.lastModified
        })

        const url = await addPhoto(mainImage);

        this.setState({
            titleImage: url
        });
        shareRecipeDataObj.recipeImage = url;
        
        let i = 0;
        for (const e of stepImages) {
            if (e !== undefined) {
                let stepImage = new File([e], `${albumName}_${i+1}`, {
                    type: e.type,
                    lastModified: e.lastModified
                });
                await addPhoto(stepImage).then(url => {
                    shareRecipeDataObj.steps[i].stepImage = url;
                });
                i++;
            }
        }
    }

    uploadRecipe = () => {
        const { name, ingredients, category, recipeImage, steps } = this.props.shareRecipeDataObj;
        
        axios.post('https://mlc.janghoseung.com/recipe', {
            name: name,
            ingredients: ingredients,
            category: category,
            recipeImage: recipeImage,
            steps: steps
        }, {
            headers: {
                Authorization: sessionStorage.getItem('ACT')
            }
        })
        .then(response => {
            toast.success("레시피 공유 성공!");
        })
        .catch(reject => {
            toast.error("레시피 공유 실패!");
            console.log(reject);
        })

        this.props.history.push('/recipe');
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

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Top)
);