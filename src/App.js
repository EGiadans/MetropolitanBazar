import React from 'react';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

function App() {
  return (
      <Router>
          <Switch>
              <Route path="/signup" component={Signup}/>
              <Route path="/profile" component={Profile}/>
              <Route path="/" component={Login}/>
          </Switch>
      </Router>
  );
}

export default App;
