import React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

import './Info.scss';

import heart from '../../../assets/icon/heart.png';
import heart_C from '../../../assets/icon/heart_C.png';

const Info = ({ recipeImage, title, category, ingredients, nickname, likes, isLiked, id }) => {
    let liked = isLiked, like = likes;

    const recipeLikeClicked = () => {
        if(!liked) {
            axios.post(`https://mlc.janghoseung.com/recipe/${id}/like`, {}, {
                headers: {
                    Authorization: sessionStorage.getItem('ACT')
                }
            })
            .then(response => {
                toast.success("레시피 좋아요 성공!");
                liked = true;
                like++;
            })
            .catch(reject => {
                toast.error("레시피 좋아요 실패!");
                console.log(reject);
            })
        } else {
            axios.delete(`https://mlc.janghoseung.com/recipe/${id}/like`, {
                headers: {
                    Authorization: sessionStorage.getItem('ACT')
                }
            })
            .then(response => {
                toast.success('레시피 좋아요 삭제 성공');
                liked = false;
                like--;
            })
            .catch(reject => {
                toast.error("레시피 좋아요 삭제 실패!");
                console.log(reject)
            })
        }
    }

    return (
        <article className="detail-recipe__info">
            <div className="detail-recipe__info__img">
                <img src={recipeImage}/>
            </div>
            <div className="detail-recipe__info__txt">
                <div className="detail-recipe__info__txt__ticain">
                    <h1 className="detail-recipe__info__txt__title">{title}</h1>
                    <h3 className="detail-recipe__info__txt__category">{category}</h3>
                    <h2 className="detail-recipe__info__txt__ingredient">재료</h2>
                    <div className="detail-recipe__info__txt__ingredient-box">{ingredients}</div>
                </div>
                <div className="detail-recipe__info__txt__recike">
                    <p className="detail-recipe__info__txt__recipe-by">{`Recipe by ${nickname}`}</p>
                    <a className="detail-recipe__info__txt__like">
                        <img src={isLiked ? heart_C : heart} onClick={recipeLikeClicked}/>
                        <p>{like}</p>
                    </a>
                </div>
            </div>
        </article>
    )
}

export default Info;