import React, { useEffect, useState } from 'react'
import firebase from '../../utils/firebase'
import './style.css'


export default function Delivery() {
    const [orderDone, setOrderDone] = useState([]);


    useEffect(() => {
        firebase.firestore().collection('command').get().then((snapshot) => {
            snapshot.forEach((doc) => {
                setOrderDone((currentState) => [...currentState, doc.data()]);
            });
        })
    }, [])

    return (
        <div>
            <h1 class="pronto">Prontos para entrega</h1>
            {orderDone.filter(i => i.status === 'done').map((item) => (
                <section class='order-card'>
                     <p class="identification">
                        <strong>Cliente:</strong> {item.client} <strong>Mesa: </strong>{item.table}
                    </p>
                        <strong>Itens:</strong>{item.itens.map(function (i) { return <p>{i.qtd} {i.name} </p> })}
                        <p class="total">
                            <strong>Total:</strong> R${item.total},00
                        </p>
                </section>
            ))}
        </div>
    )

}

