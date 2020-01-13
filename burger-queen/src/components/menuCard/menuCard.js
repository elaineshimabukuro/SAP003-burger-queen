import React from 'react';
import './style.css';


export default function MenuCard(props){
    return(
        <section class="menu-card" onClick={props.handleClick}>
            <p>{props.client}</p>
            <p>{props.qtd}</p>
            <p>{props.name}</p>
            <p>{props.price}</p>
            <p>{props.table}</p>
            <p>{props.timestamp}</p>
            
        </section>
    )
}