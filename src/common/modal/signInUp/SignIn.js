import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setIsSignIn, setNickName, setSignInUpModalShow } from '../../../actions/index';

class SignIn extends Component {
    state = {
        id: '',
        password: '',
        isChecked: false
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
            isChecked: !this.state.isChecked
        })
    }
    
    loginClicked = () => {
        const { id, password, isChecked } = this.state;
        const { setIsSignIn, setSignInUpModalShow } = this.props;
        
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
            <div className="signInUp__contents__signIn__wrapper">
                <div className="signInUp__contents__signIn__input">
                    <input type="text" placeholder="이메일" onBlur={this.idChange}/>
                    <input type="password" placeholder="비밀번호" onBlur={this.passwordChange}/>
                </div>
                <div className="signInUp__contents__signIn__remember">
                    <label htmlFor="rememberLogin"><input type="checkbox" id="rememberLogin" value="로그인 상태 유지" onChange={this.chackBoxChange}/>로그인 상태 유지</label>
                </div>
                <div className="signInUp__contents__signIn__submit">
                    <button onClick={this.loginClicked}>로그인</button>
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