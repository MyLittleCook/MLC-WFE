import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.scss';
import Header from './common/header/Header';
import Home from './container/Home/HomeContainer';
import Recipe from './container/Recipe/RecipeContainer';
import ShareRecipe from './container/ShareRecipe/ShareRecipe';
import Fridge from './container/Fridge/FridgeContainer';
import Community from './container/Community/CommunityContainer';
import Footer from './common/Footer/Footer';


class App extends Component {
    
    render() {
        return (
            <BrowserRouter>
                <Header />
                <Route exact path="/recipe" component={Home} />
                <Route path="/" component={Recipe} />
                <Route path="/shareRecipe" component={ShareRecipe} />
                <Route path="/fridge" component={Fridge} />
                <Route path="/community" component={Community} />
                <Footer />
            </BrowserRouter>
        );
    }
}

export default App;