import React from "react";

import "./App.css";

import Register from "./Pages/Register/Register";
import Reducer from "./redux/Reducer";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Restaurant from './Pages/Restaurant/Restaurant'
import logger from "redux-logger";

function App() {
  return (
    <Provider store={createStore(Reducer, applyMiddleware(logger,thunk))}>
    
      <Restaurant />
    </Provider>
  );
}

export default App;
