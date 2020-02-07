import './app.css'
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Saloon from './pages/saloon/saloon';
import Kitchen from './pages/kitchen/kitchen';
import Delivery from './pages/delivery/delivery';
import Nav from './components/Nav/nav.js';
import Header from './components/header/header.js';


export default function App() {

  return (<div class="container-principal">
    <Header />
    <Router>
      <Nav />
      <div>
        <Switch>
          <Route path="/saloon" component={Saloon} />
          <Route path="/kitchen" component={Kitchen} />
          <Route path="/delivery" component={Delivery} />
        </Switch>
      </div>
    </Router>
  </div>);
}
