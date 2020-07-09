
import React from "react";

import "./App.css";

import Login from "./Pages/Login/Login";
import Reducer from "./redux/Reducer";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logger from "redux-logger";

function App() {
  return (
    <Provider store={createStore(Reducer, applyMiddleware(logger,thunk))}>
      <Login/>
    </Provider>
  );
}

export default App;