import React, { Component } from 'react';

import './Step.scss';

import deleteIcon from '../../../assets/icon/delete.png';

class StepBoxImage extends Component {
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
        const { stepId } = this.props;
        return (
            <div className="share-recipe__contents__step__list__box__wrapper__img">
                <input type="file" id={"shareRecipeImgUpload"+stepId} accept="image/*" onChange={this.getImgFile}/>
                {this.state.file !== '' ? <><img className='share-recipe__contents__step__list__box__wrapper__img__preview' src={this.state.previewURL} /><img className='share-recipe__contents__step__list__box__wrapper__img__delete' src={deleteIcon} onClick={this.deleteImgFile} /></> : <label for={"shareRecipeImgUpload"+stepId}>사진 업로드</label>}
            </div>
        )
    }
}

const StepBox = ({stepId}) => {
    return (
        <div className="share-recipe__contents__step__list__box">
            <div className="share-recipe__contents__step__list__box__title"><h3>{`Step ${stepId}`}</h3></div>
            <div className="share-recipe__contents__step__list__box__wrapper">
                <StepBoxImage stepId={stepId} />
                <div className="share-recipe__contents__step__list__box__wrapper__text">
                    <textarea></textarea>
                </div>
            </div>
        </div>
    )
}

class Step extends Component {
    state = {
        stepList: [<StepBox stepId={1}/>]
    }

    render() {
        const { stepList } = this.state;
        const addStep = () => {
            this.setState({
                stepList: [...stepList, <StepBox stepId={stepList.length+1}/>]
            })
            
        }
        return(
            <article className="share-recipe__contents__step">
                <div className="share-recipe__contents__step__list">
                    {stepList}
                </div>
                <div className="share-recipe__contents__step__add">
                    <button onClick={addStep}>+ Step 추가하기</button>
                </div>
            </article>
        )
    }
}

export default Step;