import React from 'react';

const Contents = ({ title, itemList }) => {
    return (
        <section className="home__contents">
            <article className="home__contents__container">
                <div className="home__contents__container__title">
                <h2>{title}</h2>
                </div>
                <div className="home__contents__container__item">
                    {itemList}
                </div>
            </article>
        </section>
    )
}

export default Contents;