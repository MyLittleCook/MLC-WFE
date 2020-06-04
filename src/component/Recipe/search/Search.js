import React from 'react';
import './Search.scss';

const Search = ({ category }) => {
    return (
        <>
            <article className="bar">
                <input type="text" placeholder="검색하실 레시피를 적어주세요." />
            </article>
            <article className="category">
                <div>
                    {category}
                </div>
            </article>
        </>
    )
}

export default Search;