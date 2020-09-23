import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import './App.css';
import './css/style.css';

// Importing components
import ErrorBoundary from "./shared/errorHandler";
import LoginComponent from "./components/loginComponent";
import PlanetComponent from "./components/planetComponent";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Router>
            <Switch>
              <Route path="/planets" component={PlanetComponent}>
              </Route>
              <Route path="/" component={LoginComponent}>
              </Route>
            </Switch>
        </Router>
        </ErrorBoundary>
    </div>
  );
}

export default App;
