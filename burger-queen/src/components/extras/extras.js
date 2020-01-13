import React from 'react'
import './style.css';


export default function Extras (props) { 
    return(
        <div class='card'>
            <h3>Adicionais</h3>
            {props.modal.item.adicional.map((elem, index) => (
                <div class='options'key={index}>
                <input onChange={()=> props.setOptions(`${props.options} ${elem.name}`)}type='radio' name='adicionais' value={elem.name}/>
                <label>{elem.name}</label>
                </div>
            ))}
        
                <h3>Tipos de Carne</h3>
                {props.modal.item.types.map((elem, index) => (
                    <div class='options' key={index}>
                    <input onChange={()=> props.setTypes(`${props.types} ${elem}`)}type='radio' name='tipos' value={elem}/>
                    <label>{elem}</label>
                    </div>
                ))}
                <button onClick={props.addExtrasTypes}>Adicionar</button>
        </div>
    )
    
     
       
}