import React from "react";

import "./App.css";

import Register from "./Pages/Register/Register";
import Reducer from "./redux/Reducer";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Restaurant from "./Pages/Restaurant/Restaurant";
import RestaurantDetails from "./Pages/RestaurantDetail/RestaurantDetail";
import logger from "redux-logger";

function App() {
  return (
    <Provider store={createStore(Reducer, applyMiddleware(logger, thunk))}>
      

      <Router>
        <Switch>
          <Route exact path="/restaurant">
          <Restaurant />
          </Route>
          <Route exact path="/restaurant/:id">
            <RestaurantDetails />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
