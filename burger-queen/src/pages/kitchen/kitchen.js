import React, { useState, useEffect } from 'react';
import firebase from '../../utils/firebase.js';
//import Card from '../../components/Card/card.js'
import Button from '../../components/button/button'
import './style.css'
//import OrderCard from '../../components/orderCard/orderCard'


export default function Kitchen( ) {
  const [order, setOrder] = useState([]);


  useEffect(() => {
    firebase.firestore().collection('command').get().then((snapshot) => {
      const documento = snapshot.docs.map((doc) =>{ return ({...doc.data(),
        id: doc.id})
      })
      setOrder(documento)
      console.log(documento)
      });
    
  }, [])

  const initOrder = (item) => {
    const orderItem = order.find(i => i === item)
    if (orderItem) {
      orderItem.status = 'doing'
    }
    setOrder([...order])
  
      firebase
      .firestore()
      .collection('command')
      .doc(item.id)
      .update({
        status: 'doing',
        timestamp: new Date().toLocaleString('pt-BR', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        }),    
      }),
      
      setOrder([...order])
    
  }

  const finishOrder = (item) => {
    const orderItem = order.find(i => i === item)
    if (orderItem) {
      orderItem.status = 'done'
    }
    setOrder([...order])

    firebase
    .firestore()
    .collection('command')
    .doc(item.id)
    .update({
      status: 'done',
      timestamp: new Date().toLocaleString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }),
      })
    
     setOrder([...order])
     
  }

  return (
    <div class='container-kitchen'>
      <div class='orders'>

        <h1>Pedidos</h1>
        {order.filter(i => i.status === 'waiting').map((item) => (
           <section class='card'>
              <div class="itens">
                <strong>Itens:</strong>{item.itens.map(function (i) { return <p>{i.qtd} {i.name} </p> })}
              </div>
              <div class="identification">
                <strong>Cliente:</strong> {item.client} <strong>Mesa: </strong>{item.table}
              </div>
              <div>
                <strong>Hora:</strong> {item.timestamp}
              </div>
              <Button
                class="init"
                title='Iniciar Preparo'
                handleClick={() => initOrder(item)}

              />
            </section>
        ))}



      </div>
      <div class="orders-doing">
        <h1>Fazendo ...</h1>
        {order.filter(i => i.status === 'doing').map((item) => (
          <section class='card'>
            <div class="itens">
              <strong>Itens:</strong>{item.itens.map(function (i) { return <p>{i.qtd} {i.name} </p> })}
            </div>
            <div class="identification">
              <strong>Cliente:</strong> {item.client} <strong>Mesa: </strong>{item.table}
            </div>
            <div>
              <strong>Hora:</strong> {item.timestamp}
            </div>
            <Button
              class="init"
              title='Pedido Feito'
              handleClick={() => finishOrder(item)}

            />
          </section>
        ))}

      </div>
      
    </div>
  )
}


  



