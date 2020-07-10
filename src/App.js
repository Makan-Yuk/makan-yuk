import React from "react";

import "./App.css";
import PrivateRoute from './helpers'

import Register from "./Pages";
import reducers from "./redux/Reducer";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Restaurant from './Pages'
import RestaurantDetail from './Pages'


function App() {
  return (
    <div className="App">
      <Provider store={createStore(reducers, applyMiddleware(thunk))}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <PrivateRoute exact path="/restaurant">
              <Restaurant />
            </PrivateRoute>

            <PrivateRoute exact path="/restaurant/:id">
              <RestaurantDetail />
            </PrivateRoute>
           
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
