import React from 'react';
import {Link} from "react-router-dom";
import './style.css';

export default function Nav(){
    return (
        <nav class="nav">
            <ul>
                <li class="salao">
                <Link to="/saloon">Salão</Link>
                </li>
                <li class="cozinha">
                <Link to="/kitchen">Cozinha</Link>
                </li>
            </ul>
        </nav>
    )
}
