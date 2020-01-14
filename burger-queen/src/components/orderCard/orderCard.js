import React from 'react'

export default function OrderCard(props) {
    return (
        <section>
        <div class="itens">
            <strong>Itens:</strong>{props.itens.map(function (i) { return <p>{i.qtd} {i.name} </p> })}
        </div>
        <div class="identification">
            <strong>Cliente:</strong> {props.client} <strong>Mesa: </strong>{props.table}
        </div>
        <div>
            <strong>Hora:</strong> {props.timestamp}
        </div>
       
        </section>
    )
}