import React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

import './Top.scss';

const Top = ({ isOwner, id, history }) => {
    const recipeAlteration = () => {
        toast.error('아직 준비되지 않은 기능입니다.');
    }

    const recipeDelete = () => {
        axios.delete(`https://mlc.janghoseung.com/recipe/${id}`, {
            headers: {
                Authorization: sessionStorage.getItem('ACT')
            }
        })
        .then(response => {
            toast.success('레시피 삭제 성공');
            history.push('/recipe');
        })
        .catch(reject => {
            console.log(reject)
        })
    }

    return (
        <>
        {
        isOwner ?
        <>
            <article className="detail-recipe__top">
                <a className="detail-recipe__top__alteration" onClick={recipeAlteration}>수정</a>
                <a className="detail-recipe__top__delete" onClick={recipeDelete}>삭제</a>
            </article>
        </>
        :
        null
        }
        </>
    )
}

export default Top;