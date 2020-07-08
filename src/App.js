import React from "react";

import "./App.css";

import Register from "./Pages/Register/Register";
import ReduxReducer from "./redux/Reducer";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Restaurant from './Pages/Restaurant/Restaurant'
import logger from "redux-logger";

function App() {
  return (
    <Provider store={createStore(ReduxReducer, applyMiddleware(logger,thunk))}>
      <Register />
      <Restaurant />
    </Provider>
  );
}

export default App;
