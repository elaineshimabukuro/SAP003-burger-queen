import React from 'react';
import './style.css'
//import Card from '/home/laboratoria/Lab/SAP003-burger-queen/burger-queen/src/components/Card/card.js'
import Button from "/home/laboratoria/Lab/SAP003-burger-queen/burger-queen/src/components/button/button.js";


export default function Command(props) {

    return (
        <div>
            <form class="command-header">
                <label for="client">Cliente</label>
                <input class="client" type="text" placeholder="Cliente"></input>
                <label for="table">Mesa</label>
                <input class="table" type="text" placeholder="Mesa"></input>
            </form>

            <div class="command">
                <ul>
                    {props.itens.map((item, index) =>

                        <section key={index}>
                            <div class="qtd">Qnt: {item.qtd}</div>
                            <div class="description">{item.name}</div>
                            <div class="price">R$ {item.price * item.qtd},00</div>

                            <Button
                                title={"-"}
                                handleClick={() => props.subItem(item)} />
                            <Button
                                title={"X"}
                                handleClick={() => props.deleteItens(item)} />
                        </section>
                    )}
                </ul>
            </div>
            <div class="command-footer">
                <p>Valor total: R${props.total},00</p>
                <Button
                    title={"Enviar pedido"} />
            </div>
        </div>
    )
}



                                // <div>
                                // <Card
                                //     key={index}
                                //     qtd={item.qtd}
                                //     name={item.name}
                                //     price= {item.price * item.qtd} />

                                //     <Button
                                //         title={"-"}
                                //         handleClick={() => props.subItem(item)} />
                                //     <Button
                                //         title={"X"}
                                //         handleClick={() => props.deleteItens(item)} /> 
                                // </div>