import React from 'react';
import './style.css'
import MenuCard from '../menuCard/menuCard'
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
                    placeholder={'Mesa'}
                    focusOut={e => props.setTable(e.currentTarget.value)}
                />
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
                    title={"Enviar pedido"}
                    handleClick={props.sendCommand} />
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