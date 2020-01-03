import React from 'react';
import './style.css'
//import Menu from '/home/laboratoria/Lab/SAP003-burger-queen/burger-queen/src/components/Menu/menu.js'
//import Button from './components/Button/button.js'


export default function Command(props) {


    return (
        <div>
            <form class="command">
                <label for="client">Cliente</label>
                <input class="client" type="text" placeholder="Cliente"></input>
                <label for="table">Mesa</label>
                <input class="table" type="text" placeholder="Mesa"></input>
            </form>

            <div>
                <ul>
                    {props.itens.map((item, index) =>
                        <li key={index}>{item.name}  Quantidade: {item.qtd}  R$ {item.price * item.qtd},00  <button onClick={() => props.subItem(item)}> - </button></li>
                    )}
                </ul>
            </div>

        </div>
    )
}