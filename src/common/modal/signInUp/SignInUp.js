import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSignInUpModalShow } from '../../../actions/index';

import './SignInUp.scss';
import SignIn from './SignIn';
import SignUp from './SignUp';

class SignInUp extends Component {
    state = {
        page: 'in'
    }
    render() {
        const changePage = () => {
            let inUp = this.state.page === 'in' ? 'up' : 'in';
            this.setState({
                page: inUp
            })
        }

        const removeEvent = (e) => {
            e.stopPropagation();
        }
        
        return (
            <>
            {
            this.props.modalShow ?
            <>
                <div className="signInUp__overlay" onClick={() => this.props.setSignInUpModalShow(false)} >
                    <div className="signInUp__wrapper" onClick={removeEvent}>
                        <div className="signInUp__title">
                            {this.state.page === 'in' ? <h1>로그인</h1> : <h1>회원가입</h1>}
                        </div>
                        <div className="signInUp__contents">
                            {this.state.page === 'in' ? <SignIn /> : <SignUp />}
                        </div>
                        <div className="signInUp__or">또는</div>
                        <div className="signInUp__change">
                            <button onClick={changePage}>{this.state.page === 'in' ? '회원가입' : '로그인'}</button>
                        </div>
                    </div>
                </div>
            </>
            :
            null
            }
            </>
        )
            
    }
}

const mapStateToProps = (state) => ({
    modalShow: state.modal.signInUpModalShow
})

const mapDispatchToProps = dispatch => ({
    setSignInUpModalShow: bool => dispatch(setSignInUpModalShow(bool))
})

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(SignInUp);