import React, {useState,useEffect}  from 'react';
import firebase from '/home/laboratoria/Lab/SAP003-burger-queen/burger-queen/src/utils/firebase.js';
//import Card from '/home/laboratoria/Lab/SAP003-burger-queen/burger-queen/src/components/Card/card.js'

export default function Kitchen (props){
  const [order, setOrder] = useState([]);

  useEffect(() => {
      firebase.firestore().collection('command').get().then((snapshot) => {
          snapshot.forEach((doc) => {
            setOrder((currentState) => [...currentState, doc.data()]);
            
          });
          console.log(order)
      })
  }, []) 
  

    return (
     <div>
       <h2>Pedidos</h2>

        
     </div>
    )
  }

//   {order.map((item)=> 
//     <Card 
//       client={item.client}
//       name={item.itens} 
//       qtd={item.qtd}
//       timestamp={item.timestamp}

//  /> )}