import React, { Component } from 'react';

import './Info.scss';
import IngredientModal from '../modal/IngredientModal';

import deleteIcon from '../../../assets/icon/delete.png';

class Image extends Component {
    state = {
        file : '',
        previewURL : ''
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
        }
        reader.readAsDataURL(file);
    }

    deleteImgFile = () => {
        this.setState({
            file : '',
            previewURL : ''
        })
    }

    render() {
        return (
            <div className="share-recipe__contents__info__img">
                <input type="file" id="shareRecipeImgUpload" accept="image/*" onChange={this.getImgFile}/>
                {this.state.file !== '' ? <><img className='share-recipe__contents__info__img__preview' src={this.state.previewURL} /><img className='share-recipe__contents__info__img__delete' src={deleteIcon} onClick={this.deleteImgFile} /></> : <label htmlFor="shareRecipeImgUpload">사진 업로드</label>}
            </div>
        )
    }
}

class Info extends Component {
    state = {
        IngredientModalShow: false,
        data_category: '기타'
    }

    categoryChange = (e) => {
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
        return(
            <>
            <article className="share-recipe__contents__info">
                <Image />
                <div className="share-recipe__contents__info__etc">
                    <label className="share-recipe__contents__info__etc__title" htmlFor="shareRecipeName">레시피 이름</label>
                    <input className="share-recipe__contents__info__etc__box" id="shareRecipeName" type="text"/>
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
                        <div className="share-recipe__contents__info__ingredient__list__box">
                            <p>당근</p>
                            <p>디자인못생겼다.</p>
                        </div>
                        <div className="share-recipe__contents__info__ingredient__list__box">
                            <p>당근</p>
                            <p>프로토 타입이니까 괜찮아</p>
                        </div>
                        <div className="share-recipe__contents__info__ingredient__list__box">
                            <p>당근</p>
                            <p>1kg</p>
                        </div>
                    </div>
                </div>
            </article>
            {this.state.IngredientModalShow ? <IngredientModal openIngredientModal={this.openIngredientModal}/> : null}
            </>
        )
    }
}

export default Info;