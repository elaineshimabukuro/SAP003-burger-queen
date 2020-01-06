import React, {useState,useEffect}  from 'react';
import firebase from '../../utils/firebase.js';
import Card from '../../components/Card/card.js'
import Button from '../../components/button/button'

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
  

    return (
      <div>
     <div class="orders">
       
       <h1>Pedidos</h1>
      {order.map((item)=> (
          <Card 
            client={item.client}
            table={item.table}
            name={item.itens.map(function(i) { return  <p>{i.name} {i.qtd}</p> })}
            timestamp={item.timestamp}  /> 
      ))} 
          <Button
            title='Iniciar preparo'/>

       
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

