import React, {useState} from 'react'
import './style.css';


export default function Extras (props) { 
    const [options, setOptions]= useState('')
    const [types, setTypes]= useState('')

    const addExtrasTypes = () => {
        const updatedItem = {...props.modal.item, name: `${props.modal.item.name} com carne do tipo ${types} ${options ? ('Adicional:' + options) : ''}`, priceExtra: options ? 1 : 0 };

        props.addItens(updatedItem);
        props.setModal({status:false})
    }

    return(
        <div class='card'>
            <h3>Adicionais</h3>
            {props.modal.item.adicional.map((elem, index) => (
                <div class='options'key={index}>
                <input onChange={()=> setOptions(`${elem.name}`)}type='radio' name='adicionais' value={elem.name}/>
                <label>{elem.name}</label>
                </div>
            ))}
        
                <h3>Tipos de Carne</h3>
                {props.modal.item.types.map((elem, index) => (
                    <div class='options' key={index}>
                    <input onChange={()=> setTypes(`${elem}`)}type='radio' name='tipos' value={elem}/>
                    <label>{elem}</label>
                    </div>
                ))}
                <button onClick={addExtrasTypes}>Adicionar</button>
        </div>
    )
    
     
       
}