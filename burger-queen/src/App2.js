import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Saloon from './pages/saloon/saloon'
import Kitchen from './pages/kitchen/kitchen'
import Nav from './components/Nav/nav.js'
import Header from './components/header/header.js'


export default function App2 (){
    return (
      <div>
        <Header/>
        <Router>
        <Nav/>
        <div>
          <Switch>
            <Route path="/saloon" component={Saloon}/>
            <Route path="/kitchen" component={Kitchen}/>
          </Switch>
        </div>
      </Router>
      </div>
    );
  }