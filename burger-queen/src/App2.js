import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Saloon from './pages/saloon'
import Kitchen from './pages/kitchen'
import Nav from './components/nav.js'

export default function App2 (){
    return (
        <Router>
        <Nav/>
        <div>
          <Switch>
            <Route path="/saloon" component={Saloon}/>
            <Route path="/kitchen" component={Kitchen}/>
          </Switch>
        </div>
      </Router>
    );
  }