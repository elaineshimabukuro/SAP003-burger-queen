import React from 'react';
import './style.css';
import img from './logo.png';


export default function Header (){
    return (
     <header>
         <h1 class="name">Burger <img class="logo" src={img}/>Queen</h1>
     </header>
    )
  }