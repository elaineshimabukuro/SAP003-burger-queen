import React, { useState } from 'react'
import Button from '../button/button'
import './style.css'


export default function Extras(props) {
    const [options, setOptions] = useState('')
    const [types, setTypes] = useState('')

    const addExtrasTypes = () => {
        const updatedItem = { ...props.modal.item, name: `${props.modal.item.name} com carne do tipo ${types} ${options ? ('Adicional:' + options) : ''}`, priceExtra: options ? 1 : 0 };
        props.addItens(updatedItem);
        props.setModal({ status: false })
    }

    return (
        <div class='card-options'>
            <h2>Adicionais</h2>
            {props.modal.item.adicional.map((elem, index) => (
                <div class='options' key={index}>
                    <input onChange={() => setOptions(`${elem.name}`)} type='radio' name='adicionais' value={elem.name} />
                    <label>{elem.name}</label>
                </div>
            ))}

            <h2>Tipos de Carne</h2>
            {props.modal.item.types.map((elem, index) => (
                <div class='options' key={index}>
                    <input onChange={() => setTypes(`${elem}`)} type='radio' name='tipos' value={elem} />
                    <label>{elem}</label>
                </div>
            ))}
            <Button
              class="extras"
              title='Adicionar'
              handleClick={() => addExtrasTypes()}
            />
            
        </div>
    )



}