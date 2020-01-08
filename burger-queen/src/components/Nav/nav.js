import React from 'react';
import {Link} from "react-router-dom";
import './style.css';

export default function Nav(){
    return (
        <nav class="nav">
            <ul class="menu-list">
                <li class="salao">
                    <Link to="/saloon">Salão</Link>
                </li>
                
                <li class="cozinha">
                      <Link to="/kitchen">Cozinha</Link>
                </li>

                <li class="entrega">
                      <Link to="/delivery">Entrega</Link>
                </li>
            </ul>
        </nav>
    )
}
