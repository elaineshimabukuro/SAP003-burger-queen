import React, { useState } from 'react';
import Command from '../../components/command/command.js'
import './style.css'
import Menu from '../../components/Menu/menu.js'
import Extras from '../../components/extras/extras'
import firebase from '../../utils/firebase.js';


export default function Saloon() {

    const [itens, setItens]=useState([])
    const [table, setTable]= useState('')
    const [client, setClient]= useState('')
    const [modal, setModal]= useState({status:false})
    const [options, setOptions]= useState('')
    const [types, setTypes]= useState('')

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
        console.log(itens)
    }

    const subItem = (product) => {
        const findItem = itens.find(item => item.name === product.name)
        if (findItem.qtd > 1) {
            findItem.qtd--
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
    
    const verifyOptions = (menuItem) => {
        
        if(menuItem.adicional){
            setModal({status: true, item: menuItem})
        } else {
            addItens(menuItem);
        }
    }
    
    const addExtrasTypes = () => {
        const updatedItem = {...modal.item, name: `${modal.item.name} com carne do tipo ${types}  Adicional: ${options} `};
        const priceExtra = modal.item.adicional.map(elem => elem.price)
        const updatedPrice = {...modal.item, price: `${modal.item.price + priceExtra}`};
        addItens(updatedItem,updatedPrice);
        setModal({status:false})
    }

    const sendCommand = (e) =>{
        e.preventDefault()

        if (!client){
            alert('Campo do cliente vazio. Insira o nome do cliente.')
            return;
        }
        if (!table){
            alert('Campo da mesa vazio. Insira o número da mesa.')
            return;
        }
        if (itens.length === 0){
            alert('Campo da comanda vazio. Insira ao menos 1 item para enviar o pedido.')
            return;
        }
        
        firebase
        .firestore()
        .collection ('command')
        .add({
            client,
            table,
            itens: itens.map(function(i) { return { name: i.name, qtd: i.qtd } }),
            timestamp: new Date().toLocaleString('pt-BR'),
            total: total,
            status: 'waiting',
        })
        .then(() => 
            setClient(''),
            setTable (''),
            setItens([]),
        )
    }

    return (
        <div class="container">
            <div class="menu">
                <h1>M e n u</h1>
                    <Menu
                        handleClick={verifyOptions} />
            </div>
                <div class="pedido">
                {modal.status ? (
                 <Extras
                    setOptions={setOptions}
                    setTypes={setTypes}
                    setModal={setModal}
                    modal={modal}
                    addExtrasTypes={addExtrasTypes}
                 />
                ): false}
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

