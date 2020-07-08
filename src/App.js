import React from "react";

import "./App.css";

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
            <Route exact path="/">
              <Login />
            </Route>
            <PrivateRoute exact path="/Restaurant">
              <PokemonList />
            </PrivateRoute>

            <PrivateRoute exact path="/Restaurant/:name">
              <PokemonDetails />
            </PrivateRoute>
           
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
