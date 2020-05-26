import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.scss';
import Axios from 'axios';
import Header from './common/header/Header';


class App extends Component {
    
    render() {
        return (
            <BrowserRouter>
                <Header />
                {/* <Route exact path="/" render={} />
                <Route path="/recipe" render={} />
                <Route path="/shareRecipe" render={} />
                <Route path="/fridge" render={} />
                <Route path="/community" render={} /> */}
            </BrowserRouter>
        );
    }
}

export default App;