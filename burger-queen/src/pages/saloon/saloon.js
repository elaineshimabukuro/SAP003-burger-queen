import React, { useState } from 'react';
import Command from '/home/laboratoria/Lab/SAP003-burger-queen/burger-queen/src/components/command/command.js'
import './style.css'
import Menu from '/home/laboratoria/Lab/SAP003-burger-queen/burger-queen/src/components/Menu/menu.js'
import firebase from '/home/laboratoria/Lab/SAP003-burger-queen/burger-queen/src/utils/firebase.js';


export default function Saloon() {
    
    
    const [itens, setItens]=useState([])
    const [table, setTable]= useState('')
    const [client, setClient]= useState('')
    
    const sendCommand = (e) =>{
        e.preventDefault()
        firebase
        .firestore()
        .collection ('command')
        .add({
            client,
            table,
            itens: itens.map(function(i) { return { name: i.name, qtd: i.qtd } }),
            timestamp: new Date().toLocaleString('pt-BR')
        })
        .then(() => 
            setClient(''),
            setTable (''),
            setItens([]),
        )
    }

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
    const deleteItens = (product) => {
        const index = (itens.indexOf(product))
        itens.splice(index, 1)
        setItens([...itens])
    }

    const total = itens.reduce((acumulador, item) => {
            return acumulador + (item.price * item.qtd);
        }, 0)
    
    

    return (
        <div class="container">
            <div class="menu">
                <h1>M e n u</h1>
                    <Menu
                        handleClick={addItens} />
            </div>
                <div class="pedido">
                    <Command
                        itens={itens}
                        setClient={setClient}
                        setTable={setTable}
                        subItem={subItem}
                        deleteItens={deleteItens} 
                        total={total}
                        sendCommand={sendCommand} />
                </div>
        </div>

    )
}



