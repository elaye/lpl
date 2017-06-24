import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app/app';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import configureStore from './store';

const store = configureStore({});

ReactDOM.render(
        <Provider store={store}>
        <App />
        </Provider>
        , document.getElementById('root'));
registerServiceWorker();
