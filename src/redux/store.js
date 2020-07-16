import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from "redux-logger";

import allReducers from './Reducer';

const initialState = {};

const middlewares = [thunk,logger];

const store = createStore(
    allReducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
