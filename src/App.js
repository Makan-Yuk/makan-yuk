
import React from "react";
import "./App.css";
import LandingPage from "./Pages/LandingPage/LandingPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
 
      <Router>
          <Switch>
              <Route exact path="/">
                  <LandingPage />
              </Route>
          </Switch>
      </Router>
  );
}

export default App;