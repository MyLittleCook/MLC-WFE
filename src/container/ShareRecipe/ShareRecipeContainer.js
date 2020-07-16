import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSignInUpModalShow } from '../../actions/index';
import { toast } from 'react-toastify';

import ContentsContainer from './contents/ContentsContainer';

class ShareRecipe extends Component {
    componentDidMount() {
        const { setSignInUpModalShow } = this.props;
        if(!sessionStorage.getItem('ACT')) {
            toast.error("로그인부터 해주세요");
            setSignInUpModalShow(true);
            this.props.history.push('/');
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
    setSignInUpModalShow: bool => dispatch(setSignInUpModalShow(bool))
})

export default connect(
    undefined,
    mapDispatchToProps
)(ShareRecipe);