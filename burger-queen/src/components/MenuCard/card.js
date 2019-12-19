import React from 'react';
import './style.css';


export default function MenuCard(props){
    return(
        <section class="menu-card" onClick={props.handleClick}>
            <p>{props.name}</p>
            <p>{props.price}</p>
        </section>
    )
}