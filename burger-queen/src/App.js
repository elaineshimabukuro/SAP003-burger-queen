import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/header/header.js'
import MenuBF from './components/Menu/menu.js';
import Command from './components/command/command.js'
import Footer from './components/footer/footer.js'

export default function App (){
    return (
     <div>
     <Header/>
     <Command/>
     <Footer/>
     </div>
    );
  }