import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { setIsSignIn, setNickName } from './actions/index';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';
import Header from './common/header/Header';
import Home from './container/Home/HomeContainer';
import Recipe from './container/Recipe/RecipeContainer';
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
                authorization: localStorage.getItem("RFT")
            }
        })
        .then(response => {
            sessionStorage.setItem('ACT', response.data.result.accessToken);
            this.getInfo();
            setIsSignIn(true);
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
            <BrowserRouter>
                <ToastContainer />
                <Header />
                <Route exact path="/" component={Home} />
                <Route path="/recipe" component={Recipe} />
                <Route path="/shareRecipe" component={ShareRecipe} />
                <Route path="/fridge" component={Fridge} />
                <Route path="/community" component={Community} />
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