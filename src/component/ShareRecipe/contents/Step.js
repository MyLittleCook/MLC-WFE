import React, { Component } from 'react';

import './Step.scss';

class Step extends Component {
    render() {
        return(
            <article className="share-recipe__contents__step">
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
        )
    }
}

export default Step;