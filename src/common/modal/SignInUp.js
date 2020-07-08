import React, { Component } from 'react';
import './SignInUp.scss';

class SignIn extends Component {
    render() {
        return (
            <div className="signIn--wrapper">
                <div className="signIn--input">
                    <input type="text" placeholder="아이디"/>
                    <input type="text" placeholder="비밀번호"/>
                </div>
                <div className="signIn--remember">
                    <label for="remember_login"><input type="checkbox" name="rememberLogin" value="로그인 상태 유지" id="remember_login"/>로그인 상태 유지</label>
                </div>
                <div className="signIn--submit">
                    <button>로그인</button>
                </div>
            </div>
        )
    }
}

class SignUp extends Component {
    render() {
        return (
            <div className="signUp--wrapper">
                <div className="signUp--input">
                    <input type="text" placeholder="닉네임"/>
                    <input type="text" placeholder="아이디"/>
                    <input type="text" placeholder="비밀번호"/>
                    <input type="text" placeholder="비밀번호확인"/>
                </div>
                <div className="signUp--submit">
                    <button>회원가입</button>
                </div>
            </div>
        )
    }
}

class SignInUp extends Component {
    state = {
        page: 'in'
    }
    render() {
        const close = () => {
            this.props.onSubmit(false);
        }
        const changePage = () => {
            let inUp = this.state.page === 'in' ? 'up' : 'in';
            this.setState({
                page: inUp
            })
        }
        return (
            <>
            {
            this.props.isOpen ?
            <>
                <div className="signInUp--overlay" onClick={close} />
                <div className="signInUp--wrapper">
                    <div className="signInUp--title">
                        {this.state.page === 'in' ? <h1>로그인</h1> : <h1>회원가입</h1>}
                    </div>
                    <div className="signInUp--contents">
                        {this.state.page === 'in' ? <SignIn /> : <SignUp />}
                    </div>
                    <div className="signInUp--or">또는</div>
                    <div className="signInUp--change">
                        <button onClick={changePage}>{this.state.page === 'in' ? '회원가입' : '로그인'}</button>
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
export default SignInUp;