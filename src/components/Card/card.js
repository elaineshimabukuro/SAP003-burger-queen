import React from 'react';
import './style.css';


export default function Card(props){
    return(
        <section class="card" onClick={props.handleClick}>
            <p><h3>{props.client}</h3></p>
            <p>{props.qtd}</p>
            <p>{props.name}</p>
            <p>{props.price}</p>
            <p><h3>{props.table}</h3></p>
            <p>{props.timestamp}</p>
            
        </section>
    )
}