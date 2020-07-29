import React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Top = ({ isOwner, id, history }) => {
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
                <a>수정</a>
                <a onClick={recipeDelete}>삭제</a>
            </article>
        </>
        :
        null
        }
        </>
    )
}

export default Top;