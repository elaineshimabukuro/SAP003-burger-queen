import React from 'react';
import {Link} from "react-router-dom";
import './style.css';

export default function Nav(){
    return (
        <nav class="nav">
            <ul class="menu-list">
                <button class="myButton">
                    <Link to="/saloon">Salão</Link>
                </button>
                
                <button class="myButton">
                      <Link to="/kitchen">Cozinha</Link>
                </button>

                <button class="myButton">
                      <Link to="/delivery">Entrega</Link>
                </button>
            </ul>
        </nav>
    )
}
