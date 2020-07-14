import React, { Component } from 'react';
import { connect } from 'react-redux';

import './StepBox.scss';

import deleteIcon from '../../../assets/icon/delete.png';

class StepBox extends Component {
    state = {
        file : null,
        previewURL : ''
    }
    
    componentDidMount() {
        const { shareRecipeDataObj, stepId } = this.props;
        shareRecipeDataObj.steps[stepId-1] = {stepImage: '', content: '' };
    }

    getImgFile = (e) => {
        const { stepImageFileObj, stepId } = this.props;

        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {
            this.setState({
                file : file,
                previewURL : reader.result
            })
            stepImageFileObj[stepId-1] = this.state.file;
        }
        reader.readAsDataURL(file);
    }

    deleteImgFile = () => {
        const { stepImageFileObj, stepId } = this.props;
        this.setState({
            file : null,
            previewURL : ''
        })
        stepImageFileObj[stepId-1] = undefined;
    }

    steptextChange = (e) => {
        const { shareRecipeDataObj, stepId } = this.props;
        shareRecipeDataObj.steps[stepId-1].content = e.target.value.trim();
    }

    render() {
        const { stepId } = this.props;
        return (
            <div className="share-recipe__contents__step__list__box">
                <div className="share-recipe__contents__step__list__box__title"><h3>{`Step ${stepId}`}</h3></div>
                <div className="share-recipe__contents__step__list__box__wrapper">
                    <div className="share-recipe__contents__step__list__box__wrapper__img">
                        <input type="file" id={"shareRecipeImgUpload"+stepId} accept="image/*" onChange={this.getImgFile}/>
                        {this.state.file !== null ? <><img className='share-recipe__contents__step__list__box__wrapper__img__preview' src={this.state.previewURL} /><img className='share-recipe__contents__step__list__box__wrapper__img__delete' src={deleteIcon} onClick={this.deleteImgFile} /></> : <label htmlFor={"shareRecipeImgUpload"+stepId}>사진 업로드</label>}
                    </div>
                    <div className="share-recipe__contents__step__list__box__wrapper__text">
                        <textarea onBlur={this.steptextChange}></textarea>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    shareRecipeDataObj: state.share.shareRecipeData,
    stepImageFileObj: state.imageFile.stepImageFile
})

export default connect(
    mapStateToProps
)(StepBox);