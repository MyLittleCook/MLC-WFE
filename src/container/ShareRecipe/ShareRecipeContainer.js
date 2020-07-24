import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { setSignInUpModalShow, setShareRecipeData, setRecipeImageFile, setStepImageFile } from '../../actions/index';
import { toast } from 'react-toastify';

import ContentsContainer from './contents/ContentsContainer';

class ShareRecipe extends Component {
    componentDidMount() {
        const { setSignInUpModalShow, setShareRecipeData, setRecipeImageFile, setStepImageFile } = this.props;

        if(!sessionStorage.getItem('ACT')) {
            toast.error("로그인부터 해주세요");
            setSignInUpModalShow(true);
            this.props.history.push('/');
        } else {
            setShareRecipeData({
                name: '',
                ingredients: [],
                category: '기타',
                recipeImage: '',
                steps: [
                    {
                        stepImage: '',
                        content: '',
                    }
                ]
            });
            setRecipeImageFile(null);
            setStepImageFile([]);
        }
    }
    render() {
        return (
            <section className="share-recipe">
                <ContentsContainer />
            </section>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    setSignInUpModalShow: bool => dispatch(setSignInUpModalShow(bool)),
    setShareRecipeData: data => dispatch(setShareRecipeData(data)),
    setRecipeImageFile: data => dispatch(setRecipeImageFile(data)),
    setStepImageFile: data => dispatch(setStepImageFile(data))
})

export default withRouter(
    connect(
        undefined,
        mapDispatchToProps
    )(ShareRecipe)
);