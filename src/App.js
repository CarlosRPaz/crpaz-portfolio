import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProjectArchiveScreen from './screens/ProjectArchiveScreen';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <HomeScreen />
          </Route>
          <Route path='/projectarchive'>
            <ProjectArchiveScreen />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
