import React, { useState, useEffect } from 'react';
import firebase from '../../utils/firebase.js';
//import Card from '../../components/Card/card.js'
import Button from '../../components/button/button'
import './style.css'
//import OrderCard from '../../components/orderCard/orderCard'


export default function Kitchen(props) {
  const [order, setOrder] = useState([]);


  useEffect(() => {
    console.log(order)

  })

  useEffect(() => {
    firebase.firestore().collection('command').get().then((snapshot) => {
      snapshot.forEach((doc) => {
        setOrder((currentState) => [...currentState, doc.data()]);
      });
    })
  }, [])

  const initOrder = (item) => {
    const orderItem = order.find(i => i === item)
    if (orderItem) {
      orderItem.status = 'doing'
    }

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
    .collection('orderDone')
    .add({
      item,
      timestamp :new Date().toLocaleString('pt-BR'),
    })

    setOrder([...order])
  }

  return (
    <div class='container-kitchen'>
      <div class='orders'>

        <h1>Pedidos</h1>
        {order.filter(i => i.status === 'waiting').map((item) => (
           <section class='menu-card'>
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
                handleClick={() => initOrder(item)}

              />
            </section>
        ))}



      </div>
      <div class="orders-doing">
        <h1>Fazendo ...</h1>
        {order.filter(i => i.status === 'doing').map((item) => (
          <section class='menu-card'>
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


  


  // <Card 
  //           client={item.client}
  //           table={item.table}
  //           name={item.itens.map(function(i) { return  <p>{i.name} {i.qtd}</p> })}
  //           timestamp={item.timestamp}  />

