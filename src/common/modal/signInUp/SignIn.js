import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setIsSignIn, setNickName, setSignInUpModalShow } from '../../../actions/index';

class SignIn extends Component {
    state = {
        id: '',
        password: '',
        isChecked: false,
        warningText: ''
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

    chackBoxChange = () => {
        this.setState({
            isChecked: !this.state.isChecked,
            warningText: '개인 정보 보호를 위해 본인 기기에서만 이용해 주세요.'
        })
    }

    deleteWarn = () => {
        this.setState({
            warningText: ''
        })
    }
    
    signInClicked = () => {
        const { id, password, isChecked } = this.state;
        const { setIsSignIn, setSignInUpModalShow } = this.props;
        
        if(!id.includes("@") && !id.includes(".")) {
            this.setState({
                warningText: '이메일 형식이 올바르지 않습니다.'
            })
        } else if(password.length < 1) {
            this.setState({
                warningText: '비밀번호를 입력해주세요.'
            })
        } else {
            axios.post('https://mlc.janghoseung.com/user/signin', {
                email: id,
                password: password
            })
            .then(response => {
                const { accessJWT, refreshJWT } = response.data;
                sessionStorage.setItem('ACT', accessJWT);
                if(isChecked) {
                    localStorage.setItem('RFT', refreshJWT);
                }
                this.getInfo();
                setIsSignIn(true);
                setSignInUpModalShow(false);
            })
            .catch(reject => {
                if(reject.response.status === 401) {
                    this.setState({
                        warningText: '이메일 또는 비밀번호를 다시 확인하세요. 등록되지 않은 이메일이거나, 이메일 또는 비밀번호를 잘못 입력하셨습니다..'
                    })
                }
                console.log(reject);
            })
        }
    }

    getInfo = () => {
        const { setNickName } = this.props;
        
        axios.get('https://mlc.janghoseung.com/user/info', {
            headers: {
                Authorization: sessionStorage.getItem("ACT")
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
            <div className="signInUp__contents__signIn__wrapper">
                <div className="signInUp__contents__signIn__input">
                    <input type="text" placeholder="이메일" onFocus={this.deleteWarn} onBlur={this.idChange}/>
                    <input type="password" placeholder="비밀번호" onFocus={this.deleteWarn} onBlur={this.passwordChange}/>
                </div>
                <div className="signInUp__contents__signIn__remember">
                    <label htmlFor="rememberLogin"><input type="checkbox" id="rememberLogin" value="로그인 상태 유지" onChange={this.chackBoxChange}/>로그인 상태 유지</label>
                </div>
                {this.state.warningText !== '' ? <div className="signInUp__contents__signUp__warning">{this.state.warningText}</div> : null}
                <div className="signInUp__contents__signIn__submit">
                    <button onClick={this.signInClicked}>로그인</button>
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
)(SignIn);