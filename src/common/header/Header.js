import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import logo from '../../assets/logo/Logo_M.png';
import SignInUp from '../modal/signInUp/SignInUp'
import './Header.scss';

const MenuItem = ({to, children}) => {
    if(to === '/') {
        return (
            <NavLink exact to={to} className={'header__menu__item'} activeClassName={'header__menu__item--active'}>
                {children}
            </NavLink>
        )
    } else {
        return (
            <NavLink to={to} className={'header__menu__item'} activeClassName={'header__menu__item--active'}>
                {children}
            </NavLink>
        )
    }
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

    openSignInUp = () => {
        this.setState({
            isSignInUpOpen: true
        })
    }
    
    render() {
        
        const menuList = this.state.menuList.map(data => (
            <MenuItem to={data.to} children={data.title} key={data.to}/>
        ));
        
        return (
            <>
            <header className="header">
                <div className="header__logo">
                    <Link to="/">
                        <img src={logo} alt="logo"></img>
                    </Link>
                </div>
                <div className="header__menu">
                    <nav>
                        {menuList}
                    </nav>
                </div>
                <div className="header__login-out">
                    {this.state.loggedIn ? <a>{nickName}님 로그아웃</a> : <a onClick={this.openSignInUp}>로그인 / 회원가입</a>}
                </div>
            </header>
            <SignInUp isOpen={this.state.isSignInUpOpen} onSubmit={this.signInUpOpen}/>
            </>
        )
    }
}

export default Header;