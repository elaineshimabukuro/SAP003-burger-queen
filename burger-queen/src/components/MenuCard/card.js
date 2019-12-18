import React from 'react';

export default function MenuCard(props){
    return(
        <section onClick={props.handleClick}>
            <p>{props.name}</p>
            <p>{props.price}</p>
        </section>
    )
}