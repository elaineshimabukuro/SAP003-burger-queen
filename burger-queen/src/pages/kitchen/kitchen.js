import React, {useState,useEffect}  from 'react';
import firebase from '../../utils/firebase.js';
//import Card from '../../components/Card/card.js'
import Button from '../../components/button/button'
import './style.css'


export default function Kitchen (props){
  const [order, setOrder] = useState([]);
  

  useEffect(()=>{
    console.log(order)

  })

  useEffect(() => {
      firebase.firestore().collection('command').get().then((snapshot) => {
          snapshot.forEach((doc) => {
            setOrder((currentState) => [...currentState, doc.data()]);
          });
      })
  }, []) 

  const initOrder = () => {
 

  }

    return (
      <div>
     <div class="orders">
       
       <h1>Pedidos</h1>
      {order.map((item)=> (
          <section class='menu-card'>
            <div class="itens">
              <strong>Itens:</strong>{item.itens.map(function(i) { return  <p>{i.qtd} {i.name} </p> })}
            </div>
              <div class="identification">
                <strong>Cliente:</strong> {item.client} <strong>Mesa: </strong>{item.table}
              </div> 
                <div>
                  <strong>Hora:</strong> {item.timestamp}
                </div>
                <Button
                  class="init"
                  title='Iniciar preparo'
                  handleClick={()=>initOrder(order)}
                  
                 />
          </section>
      ))} 
          

       
     </div>
        <div class="orders-doing">
          <h1>Fazendo ...</h1>

        </div>
         <div class="orders-done">
           <h1>Pedidos Prontos</h1>

         </div>
         </div>
    )
  }


  // const initOrder = (orders) => {
  //   const index = (order.indexOf(orders))
  //   order.forEach((pedido)=>{
  //     if(order.table === pedido.table){
  //       return (
  //         <div class="orders-doing">
  //           <h1>Fazendo ...</h1>
  //           {order.map((item)=> (
  //             <section class='menu-card'>
  //               <div class="itens">
  //                 <strong>Itens:</strong>{item.itens.map(function(i) { return  <p>{i.qtd} {i.name} </p> })}
  //               </div>
  //                 <div class="identification">
  //                   <strong>Cliente:</strong> {item.client} <strong>Mesa: </strong>{item.table}
  //                 </div> 
  //                   <div>
  //                     <strong>Hora:</strong> {item.timestamp}
  //                   </div>
  //              </section>
  //             ))} 
  //         </div>

      
  //       )
  //     }
  //   })
  // }
  // <Card 
  //           client={item.client}
  //           table={item.table}
  //           name={item.itens.map(function(i) { return  <p>{i.name} {i.qtd}</p> })}
  //           timestamp={item.timestamp}  />