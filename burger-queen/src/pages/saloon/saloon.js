import React, { useState } from 'react';
import Command from '/home/laboratoria/Lab/SAP003-burger-queen/burger-queen/src/components/command/command.js'
import './style.css'
import Menu from '/home/laboratoria/Lab/SAP003-burger-queen/burger-queen/src/components/Menu/menu.js'


export default function Saloon() {
    const [itens, setItens] = useState([])

    const addItens = (newItem) => {
        const findItem = itens.find(item => item.name === newItem.name)
        if (findItem) {
            findItem.qtd++;
            setItens([...itens])
        }
        else {
            newItem.qtd = 1;
            setItens([...itens, newItem])
        }
    }

    const subItem = (product) => {
        const findIndex = itens.findIndex(item => item.name === product.name)
        if (itens[findIndex].qtd > 1) {
            itens[findIndex].qtd--
            setItens([...itens])
        }
    }

    return (
        <div class="container">
            <div class="menu">
                <h1>M e n u</h1>
                <Menu handleClick={addItens} />
            </div>
            <div class="pedido">
                <Command itens={itens} subItem={subItem} />
            </div>
        </div>

    )
}



