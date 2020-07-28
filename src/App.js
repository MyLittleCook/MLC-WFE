import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { setIsSignIn, setNickName } from './actions/index';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';
import Header from './common/header/Header';
import Home from './container/Home/HomeContainer';
import Recipe from './container/Recipe/RecipeContainer';
import RecipeDetail from './container/Recipe/detail/DetailContainer';
import ShareRecipe from './container/ShareRecipe/ShareRecipeContainer';
import Fridge from './container/Fridge/FridgeContainer';
import Community from './container/Community/CommunityContainer';
import Footer from './common/Footer/Footer';


class App extends Component {
    componentDidMount() {
        const { isSignIn } = this.props;
        if(!isSignIn && localStorage.getItem('RFT')) {
            this.autoSignIn();
        }
    }

    autoSignIn = () => {
        const { setIsSignIn } = this.props;
        axios.get('https://mlc.janghoseung.com/token', {
            headers: {
                Authorization: localStorage.getItem("RFT")
            }
        })
        .then(response => {
            sessionStorage.setItem('ACT', response.data.result.accessJWT);
            this.getInfo();
            setIsSignIn(true);
            toast.success('자동 로그인 성공!');
        })
        .catch(reject => {
            console.log(reject);
        })
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
            <BrowserRouter>
                <ToastContainer />
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/recipe" component={Recipe} />
                    <Route path="/recipe/:id" component={RecipeDetail} />
                    <Route path="/shareRecipe" component={ShareRecipe} />
                    <Route path="/fridge" component={Fridge} />
                    <Route path="/community" component={Community} />
                    <Redirect path="*" to="/" />
                </Switch>
                <Footer />
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => ({
    isSignIn: state.signin.isSignIn,
    nickName: state.signin.nickName
})

const mapDispatchToProps = dispatch => ({
    setIsSignIn: bool => dispatch(setIsSignIn(bool)),
    setNickName: string => dispatch(setNickName(string))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);