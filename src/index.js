/**
* Libraries
*/

import React from 'react';
import ReactDOM from 'react-dom';

import {
    Provider
} from 'react-redux';

import {
    history
} from './store/store';

import {
    ConnectedRouter,
} from 'connected-react-router';

import store from './store/store';

/**
* Components
*/

import App from './app';

ReactDOM.render(
    <Provider store={store}>
       <ConnectedRouter history={history}>
         <App/>
       </ConnectedRouter>
    </Provider>,
   document.getElementById('app')
);
