import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { isSignIn } from '../../../actions/index';

class SignUp extends Component {
    render() {
        return (
            <div className="signInUp__contents__signUp__wrapper">
                <div className="signInUp__contents__signUp__input">
                    <input type="text" placeholder="닉네임"/>
                    <input type="text" placeholder="아이디"/>
                    <input type="text" placeholder="비밀번호"/>
                    <input type="text" placeholder="비밀번호확인"/>
                </div>
                <div className="signInUp__contents__signUp__submit">
                    <button>회원가입</button>
                </div>
            </div>
        )
    }
}

export default SignUp;