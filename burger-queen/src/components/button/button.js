import React from 'react';
import './style.css'


export default function Button(props){
   
    return(
        <button class="button" 
            type= "submit"
            onClick={props.handleClick}> 
            {props.title}
        </button>
    )
}