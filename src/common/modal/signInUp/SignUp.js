import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setIsSignIn, setNickName, setSignInUpModalShow } from '../../../actions/index';

class SignUp extends Component {
    state = {
        nickName: '',
        id: '',
        password: '',
        passwordSame: true,
        warningText: ''
    }

    nickNameChange = (e) => {
        this.setState({
            nickName: e.target.value
        })
    }

    idChange = (e) => {
        this.setState({
            id: e.target.value
        })
    }

    passwordChange = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    passwordCheck = (e) => {
        if(e.target.value === this.state.password) {
            this.setState({
                passwordSame: true
            })
        } else {
            this.setState({
                passwordSame: false
            })
        }
    }

    deleteWarn = () => {
        this.setState({
            warningText: ''
        })
    }

    signUpClick = () => {
        const { nickName, id, password, passwordSame } = this.state;
        if(nickName.length < 1 || nickName.length > 11) {
            this.setState({
                warningText: '닉네임은 1자리 이상 10자리 이하 이여야 합니다.'
            })
        } else if(!id.includes("@") && !id.includes(".")) {
            this.setState({
                warningText: '이메일 형식이 올바르지 않습니다.'
            })
        } else if(password.length < 8 || password.length > 25) {
            this.setState({
                warningText: '비밀번호는 8자리 이상 24자리 이하 이여야 합니다.'
            })
        } else if(!passwordSame) {
            this.setState({
                warningText: '비밀번호가 일치하지 않습니다.'
            })
        } else {
            axios.post('https://mlc.janghoseung.com/user/signup', {
                nickname: nickName,
                email: id,
                password: password
            })
            .then(response => {
                this.signIn();
            })
            .catch(reject => {
                if(reject.response.status === 409) {
                    if(reject.response.data.message === 'nickname already exists') {
                        this.setState({
                            warningText: '이미 등록된 닉네임 입니다. 다른 닉네임을 입력해 주세요.'
                        })
                    } else {
                        this.setState({
                            warningText: '이미 가입된 이메일 주소입니다. 다른 이메일을 입력해 주세요.'
                        })
                    }
                }
                console.log(reject);
            })
        }
    }

    signIn = () => {
        const { id, password } = this.state;
        const { setIsSignIn, setSignInUpModalShow } = this.props;
        
        axios.post('https://mlc.janghoseung.com/user/signin', {
            email: id,
            password: password
        })
        .then(response => {
            const { accessJWT } = response.data;
            sessionStorage.setItem('ACT', accessJWT);
            this.getInfo();
            setIsSignIn(true);
            setSignInUpModalShow(false);
        })
        .catch(reject => {
            console.log(reject);
        })
    }

    getInfo = () => {
        const { setNickName } = this.props;
        
        axios.get('https://mlc.janghoseung.com/user/info', {
            headers: {
                authorization: sessionStorage.getItem("ACT")
            }
        })
        .then(response => {
            setNickName(response.data.result.nickname);
        })
        .catch(reject => {
            console.log(reject);
        })
    }

    render() {
        return (
            <div className="signInUp__contents__signUp__wrapper">
                <div className="signInUp__contents__signUp__input">
                    <input type="text" placeholder="닉네임" onFocus={this.deleteWarn} onBlur={this.nickNameChange}/>
                    <input type="text" placeholder="이메일" onFocus={this.deleteWarn} onBlur={this.idChange}/>
                    <input type="password" placeholder="비밀번호" onFocus={this.deleteWarn} onBlur={this.passwordChange}/>
                    <input type="password" placeholder="비밀번호확인" onFocus={this.deleteWarn} onBlur={this.passwordCheck}/>
                </div>
                {this.state.warningText !== '' ? <div className="signInUp__contents__signUp__warning">{this.state.warningText}</div> : null}
                <div className="signInUp__contents__signUp__submit">
                    <button onClick={this.signUpClick}>회원가입</button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    setIsSignIn: bool => dispatch(setIsSignIn(bool)),
    setNickName: string => dispatch(setNickName(string)),
    setSignInUpModalShow: bool => dispatch(setSignInUpModalShow(bool))
})

export default connect (
    undefined,
    mapDispatchToProps
)(SignUp);