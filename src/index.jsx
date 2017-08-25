import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import reducers from "./reducers";

const store = createStore(reducers, applyMiddleware(thunk, logger));

// Components
import TODO from './components/todo';

// Render it to DOM
ReactDOM.render(
    <Provider store={store}>
        <TODO />
    </Provider>
    , document.getElementById('root'));