import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { setSignInUpModalShow } from '../../actions/index';
import { toast } from 'react-toastify';

import ListContainer from './list/ListContainer';
import FridgeModal from '../../component/Fridge/modal/FridgeModal';

class FridgeContainer extends Component {
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
            <section className="fridge">
                <ListContainer />
                <FridgeModal />
            </section>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    setSignInUpModalShow: bool => dispatch(setSignInUpModalShow(bool))
})

export default withRouter(
    connect(
        undefined,
        mapDispatchToProps
    )(FridgeContainer)
);