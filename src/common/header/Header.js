import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo/Logo_M.png';
import './Header.scss';

const MenuItem = ({to, active, txt}) => {
    return(
        <Link to={to} className={`menu--itme--${active ? 'active' : ''}`}>
            {txt}
        </Link>
    )
}

const SigninUpButtton = ({loggedIn, nickName}) => {
    if(loggedIn) {
        return (
            <p>안녕하세요 {nickName}님</p>
        )
    } else {
        return (
            <a>로그인 / 회원가입</a>
        )
    }
}


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuList: [
                {txt: '홈', to: '/'},
                {txt: '레시피', to: '/recipe'},
                {txt: '레시피 공유', to: '/shareRecipe'},
                {txt: '냉장고 관리', to: '/fridge'},
                {txt: '커뮤니티', to: '/community'}
            ]
        }
    }

    render() {
        const menuList = this.state.menuList.map(data => (
            <MenuItem key={data.to} to={data.to} active={true} txt={data.txt}/>
        ));
        
        return (
            <header>
                <section>
                    <div>
                        <a>
                            <img src={logo} alt="logo"></img>
                        </a>
                    </div>
                    <div>
                        <nav>
                            {menuList}
                        </nav>
                    </div>
                </section>
                <SigninUpButtton loggedIn={false} nickName='asdf' />
            </header>
        )
    }
}



export default Header;