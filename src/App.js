import React from 'react';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import Sales from './components/Sales';
import Purchases from './components/Purchases'
import Feed from './components/Feed';
import ProductDetails from "./components/ProductDetails";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

function App() {
  return (
      <>
          <div>
              <Router>
                  <Switch>
                      <Route path="/product/:productId" component={ProductDetails}/>
                      <Route path="/feed" component={Feed}/>
                      <Route path="/signup" component={Signup}/>
                      <Route path="/profile" component={Profile}/>
                      <Route path="/profile/my-ads" component={MyAds}/>
                      <Route path="/sales" component={Sales}/>
                      <Route path="/purchases" component={Purchases}/>
                      <Route path="/" component={Login}/>
                  </Switch>
              </Router>
          </div>
      </>
  );
}

export default App;
