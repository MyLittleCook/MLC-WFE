import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setIsSignIn, setSignInUpModalShow } from '../../actions/index';
import { toast } from 'react-toastify';

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
        ]
    }

    signOut = () => {
        sessionStorage.removeItem('ACT');
        localStorage.removeItem('RFT');
        this.props.setIsSignIn(false);
        toast.success('로그아웃 되셨습니다.');
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
                    {this.props.isSignIn ? <a onClick={this.signOut}>{`${this.props.nickName}님 로그아웃`}</a> : <a onClick={() => this.props.setSignInUpModalShow(true)}>로그인 / 회원가입</a>}
                </div>
            </header>
            <SignInUp/>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    isSignIn: state.signin.isSignIn,
    nickName: state.signin.nickName
})

const mapDispatchToProps = dispatch => ({
    setIsSignIn: bool => dispatch(setIsSignIn(bool)),
    setSignInUpModalShow: bool => dispatch(setSignInUpModalShow(bool))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);