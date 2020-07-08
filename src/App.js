import React from "react";

import "./App.css";
import PrivateRoute from './helpers'















function App() {
  return (
    <div className="App">
      <Provider store={createStore(reducers, applyMiddleware(logger, thunk))}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route exact path="/register">
              <Login />
            </Route>
            <PrivateRoute exact path="/restaurant">
              <Restaurant />
            </PrivateRoute>

            <PrivateRoute exact path="/restaurant/:name">
              <RestaurantDetail />
            </PrivateRoute>
           
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
