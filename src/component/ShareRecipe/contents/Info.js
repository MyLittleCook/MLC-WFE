import React, { Component } from 'react';

import './Info.scss';

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
                {this.state.file !== '' ? <><img className='share-recipe__contents__info__img__preview' src={this.state.previewURL} /><img className='share-recipe__contents__info__img__delete' src={deleteIcon} onClick={this.deleteImgFile} /></> : <label for="shareRecipeImgUpload">사진 업로드</label>}
            </div>
        )
    }
}

class Info extends Component {
    render() {
        return(
            <article className="share-recipe__contents__info">
                <Image />
                <div className="share-recipe__contents__info__etc">
                    <label className="share-recipe__contents__info__etc__title" for="shareRecipeName">레시피 이름</label>
                    <input className="share-recipe__contents__info__etc__box" id="shareRecipeName" type="text"/>
                    <label className="share-recipe__contents__info__etc__title" for="shareRecipeCategory">카테고리</label>
                    <select className="share-recipe__contents__info__etc__box" id="shareRecipeCategory">
                        <option value="밥">밥</option>
                        <option value="반찬">반찬</option>
                        <option value="국&amp;찌개">국 &amp; 찌개</option>
                        <option value="일품">일품</option>
                        <option value="후식">후식</option>
                        <option value="기타" selected>기타</option>
                    </select>
                </div>
                <div className="share-recipe__contents__info__ingredient">
                    <div className="share-recipe__contents__info__ingredient__top">
                        <p>재료</p>
                        <button></button>
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
        )
    }
}

export default Info;