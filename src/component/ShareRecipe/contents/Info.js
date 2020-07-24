import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setRecipeImageFile } from '../../../actions/index';

import './Info.scss';
import IngredientModal from '../modal/IngredientModal';

import deleteIcon from '../../../assets/icon/delete.png';

class Info extends Component {
    state = {
        IngredientModalShow: false,
        file : null,
        previewURL : '',
        data_category: '기타'
    }

    getImgFile = (e) => {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {
            this.setState({
                file : file,
                previewURL : reader.result
            })
            this.props.setRecipeImageFile(this.state.file);
        }
        reader.readAsDataURL(file);
    }

    deleteImgFile = () => {
        this.setState({
            file : null,
            previewURL : ''
        })
        this.props.setRecipeImageFile(null);
    }

    nameChange = (e) => {
        this.props.shareRecipeDataObj.name = e.target.value.trim();;
    }

    categoryChange = (e) => {
        this.props.shareRecipeDataObj.category = e.target.value;
        this.setState({
            data_category: e.target.value
        })
    }

    openIngredientModal = (b) => {
        this.setState({
            IngredientModalShow: b
        })
    }

    render() {
        const ingredientList = this.props.shareRecipeDataObj.ingredients.map((d, i) => <div className="share-recipe__contents__info__ingredient__list__box" key={i}><p>{d.name}</p><p>{d.detail}</p></div>);

        return(
            <>
            <article className="share-recipe__contents__info">
                <div className="share-recipe__contents__info__img">
                    <input type="file" id="shareRecipeImgUpload" accept="image/*" onChange={this.getImgFile}/>
                    {this.state.file !== null ? <><img className='share-recipe__contents__info__img__preview' src={this.state.previewURL} /><img className='share-recipe__contents__info__img__delete' src={deleteIcon} onClick={this.deleteImgFile} /></> : <label htmlFor="shareRecipeImgUpload">사진 업로드</label>}
                </div>
                <div className="share-recipe__contents__info__etc">
                    <label className="share-recipe__contents__info__etc__title" htmlFor="shareRecipeName">레시피 이름</label>
                    <input className="share-recipe__contents__info__etc__box" id="shareRecipeName" type="text" onBlur={this.nameChange}/>
                    <label className="share-recipe__contents__info__etc__title" htmlFor="shareRecipeCategory">카테고리</label>
                    <select className="share-recipe__contents__info__etc__box" id="shareRecipeCategory" value={this.state.data_category} onChange={this.categoryChange}>
                        <option value="밥">밥</option>
                        <option value="반찬">반찬</option>
                        <option value="국&amp;찌개">국 &amp; 찌개</option>
                        <option value="일품">일품</option>
                        <option value="후식">후식</option>
                        <option value="기타">기타</option>
                    </select>
                </div>
                <div className="share-recipe__contents__info__ingredient">
                    <div className="share-recipe__contents__info__ingredient__top">
                        <p>재료</p>
                        <button onClick={() => {this.openIngredientModal(true)}}></button>
                    </div>
                    <div className="share-recipe__contents__info__ingredient__list">
                        {ingredientList.length !== 0 ? ingredientList : <div className="share-recipe__contents__info__ingredient__list__box">등록된 재료가 없습니다.</div>}
                    </div>
                </div>
            </article>
            {this.state.IngredientModalShow ? <IngredientModal openIngredientModal={this.openIngredientModal}/> : null}
            </>
        )
    }
}

const mapStateToProps = state => ({
    shareRecipeDataObj: state.share.shareRecipeData
})

const mapDispatchToProps = dispatch => ({
    setRecipeImageFile: img => dispatch(setRecipeImageFile(img))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Info);