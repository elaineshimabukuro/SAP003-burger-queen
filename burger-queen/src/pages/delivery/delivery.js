import React, {useEffect,useState} from 'react'
import firebase from '../../utils/firebase'

export default function Delivery (props) {
    const [orderDone, setOrderDone] = useState([]);


    useEffect(() => {
      console.log(orderDone)
  
    })
  
    useEffect(() => {
      firebase.firestore().collection('orderDone').get().then((snapshot) => {
        snapshot.forEach((doc) => {
            setOrderDone((currentState) => [...currentState, doc.data()]);
        });
      })
    }, [])

    return (
        <div>
            <h1>Prontos para entrega</h1>
            {orderDone.filter(i => i.status === 'done').map((item) => (
                <section class='menu-card'>
                    <div class="itens">
                        <strong>Itens:</strong>{item.itens.map(function (i) { return <p>{i.qtd} {i.name} </p> })}
                    </div>
                    <div class="identification">
                        <strong>Cliente:</strong> {item.client} <strong>Mesa: </strong>{item.table}
                    </div>
                    <div>
                        <strong>Total:</strong> {item.total}
                    </div>
                
                </section>
            ))}
         </div> 
        )

}
