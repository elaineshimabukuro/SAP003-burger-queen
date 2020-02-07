import React from 'react';
import './style.css'
import Button from "../button/button.js";
import Input from '../input/input.js'

export default function Command(props) {

    return (
        <div>
            <form class="command-header">
                <label for="client">Cliente</label>
                <Input
                    type={'text'}
                    placeholder={'Cliente'}
                    focusOut={e => props.setClient(e.currentTarget.value)}
                />
                <label for="table">Mesa</label>
                <Input
                    type={'number'}
                    min={0}
                    placeholder={'Mesa'}
                    focusOut={e => props.setTable(e.currentTarget.value)}
                />
            </form>
            <div class="command">
                <ul class="itens-order">
                    {props.itens.map((item, index) =>
                        <section key={index}>
                            <div class="order-command">
                            <p class="qtd">Qnt: {item.qtd}</p>
                            <p class="description">{item.name}</p>
                            <p class="price">R$ {item.price * item.qtd + item.priceExtra},00</p>
                            <p><Button
                                class="sub-item"
                                title={"-"}
                                handleClick={() => props.subItem(item)} />
                            
                            <Button
                                class="delete-item"
                                title={"X"}
                                handleClick={() => props.deleteItens(item)} /></p>
                            </div>
                        </section>
                    )}
                </ul>
            </div>
            <div class="command-footer">
                <p class="total">Valor total:  R$ {props.total},00</p>
                <Button
                    class="send-order"
                    title={"Enviar pedido"}
                    handleClick={props.sendCommand} />
            </div>
        </div>
    )
}



