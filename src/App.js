import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Axios from 'axios';
import Header from './common/header/Header'

const element = (
    <div>
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    </div>
);

class App extends Component {
    render() {
        return element;
    }
}

export default App;