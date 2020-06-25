import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.scss'
import reducer from './reducers';
import App from './App';

const store = createStore(reducer);

render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);
