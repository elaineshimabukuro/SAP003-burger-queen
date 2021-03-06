import React from 'react';
import './style.css'


export default function Input(props,e){
   
    return(
        <input class="input" 
            min={props.min} 
            value={props.value}
            type={props.type}
            onBlur={props.focusOut}
            placeholder={props.placeholder}> 
        </input>
    )
}