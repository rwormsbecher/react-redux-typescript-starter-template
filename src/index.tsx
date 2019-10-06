import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, Store } from 'redux';
import configureStore from "./store/index";

import './index.css';
import App from './App';

const store = configureStore();



ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

