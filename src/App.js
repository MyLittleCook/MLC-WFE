import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.scss';
import Header from './common/header/Header';
import Home from './container/Home/HomeContainer';
import Recipe from './container/Recipe/RecipeContainer';
import ShareRecipe from './container/ShareRecipe/ShareRecipeContainer';
import Fridge from './container/Fridge/FridgeContainer';
import Community from './container/Community/CommunityContainer';
import Footer from './common/Footer/Footer';


class App extends Component {
    
    render() {
        return (
            <BrowserRouter>
                <Header />
                <Route exact path="/shareRecipe" component={Home} />
                <Route path="/recipe" component={Recipe} />
                <Route path="/" component={ShareRecipe} />
                <Route path="/fridge" component={Fridge} />
                <Route path="/community" component={Community} />
                <Footer />
            </BrowserRouter>
        );
    }
}

export default App;