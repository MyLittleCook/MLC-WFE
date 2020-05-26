import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo/Logo_M.png';
import SignInUp from '../popup/signInUp/SignInUp'
import './Header.scss';

const MenuItem = ({to, active, children}) => {
    return (
        <Link to={to} className={`menu--itme--${active ? 'active' : ''}`}>
            {children}
        </Link>
    )
}

class Header extends Component {
    state = {
        menuList: [
            {title: '홈', to: '/'},
            {title: '레시피', to: '/recipe'},
            {title: '레시피 공유', to: '/shareRecipe'},
            {title: '냉장고 관리', to: '/fridge'},
            {title: '커뮤니티', to: '/community'}
        ],
        isSignInUpOpen: false,
        loggedIn: false
    }
    
    signInUpOpen = (e) => {
        this.setState({
            isSignInUpOpen: e
        })
    }
    
    render() {
        const menuList = this.state.menuList.map(data => (
            <MenuItem key={data.to} to={data.to} active={true} children={data.title}/>
        ));

        const openSignInUp = () => {
            this.setState({
                isSignInUpOpen: true
            })
        }
        
        return (
            <>
            <header className="header--wrapper">
                <div className="header--logo">
                    <Link>
                        <img src={logo} alt="logo"></img>
                    </Link>
                </div>
                <div className="header--menu">
                    <nav>
                        {menuList}
                    </nav>
                </div>
                <div className="header--loginOut">
                    {this.state.loggedIn ? <a>{nickName}님 로그아웃</a> : <a onClick={openSignInUp}>로그인 / 회원가입</a>}
                </div>
            </header>
            <SignInUp isOpen={this.state.isSignInUpOpen} onSubmit={this.signInUpOpen}/>
            </>
        )
    }
}

export default Header;