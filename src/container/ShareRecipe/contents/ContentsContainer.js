import React, { Component } from 'react';

import './ContentsContainer.scss';

class ContentsContainer extends Component {

    render() {
        return (
            <section className="share-recipe__contents">
                <article className="share-recipe__contents__top">
                    <button type="button">확인</button>
                </article>
                <article className="share-recipe__contents__">
                    <div>
                        <label for="shareRecipeImgUpload">사진 업로드</label>
                        <input type="file" id="shareRecipeImgUpload" accept="image/*"/>
                    </div>
                    <div>
                        <label for="shareRecipeName">레시피 이름</label>
                        <input id="shareRecipeName" type="text"/>
                        <label for="shareRecipeCategory">카테고리</label>
                        <select id="shareRecipeCategory">
                            <option value="밥">밥</option>
                            <option value="반찬">반찬</option>
                            <option value="국&amp;찌개">국 &amp; 찌개</option>
                            <option value="일품">일품</option>
                            <option value="후식">후식</option>
                            <option value="기타" selected>기타</option>
                        </select>
                    </div>
                    <div>
                        <div>
                            <p></p>
                            <div></div>
                        </div>
                        <div>
                            <div>
                                <p>당근</p>
                                <p>1kg</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article>
                    <div>
                        <div>
                            <div><h3>Step 1</h3></div>
                            <div>
                                <div>
                                    <label for="shareRecipeImgUpload">사진 업로드</label>
                                    <input type="file" id="shareRecipeImgUpload" accept="image/*"/>
                                </div>
                                <div>
                                    <textarea></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button>+ Step 추가하기</button>
                    </div>
                </article>
            </section>
        )
    }
}

export default ContentsContainer;