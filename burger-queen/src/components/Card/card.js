import React from 'react';
import './style.css';


export default function Card(props){
    return(
        <section class="menu-card" onClick={props.handleClick}>
            <p>{props.qtd}</p>
            <p>{props.name}</p>
            <p>{props.price}</p>
        </section>
    )
}