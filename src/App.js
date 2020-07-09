
import React from "react";

import "./App.css";

import Login from "./Pages/Login/Login";
import Reducer from "./redux/Reducer";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logger from "redux-logger";
import LandingPage from "./Pages/LandingPage/LandingPage";

function App() {
  return (
    <Provider store={createStore(Reducer, applyMiddleware(logger,thunk))}>
      <Router>
          <Switch>
              <Route exact path="/login">
                  <Login />
              </Route>
              <Route exact path="/">
                  <LandingPage />
              </Route>
             
          </Switch>
      </Router>
    </Provider>
  );
}

export default App;