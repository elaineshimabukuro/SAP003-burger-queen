import React from 'react';
import Command from '/home/laboratoria/Lab/SAP003-burger-queen/burger-queen/src/components/command/command.js'
import './style.css'
import MenuAllDay from '/home/laboratoria/Lab/SAP003-burger-queen/burger-queen/src/components/Menu/allday.js'
import MenuBreakFast from '/home/laboratoria/Lab/SAP003-burger-queen/burger-queen/src/components/Menu/breakfast.js'


export default function Saloon (){
   
    return (
        <div class="container">
            <div class="menu">
                <h1>M e n u</h1>
                <h2>Café da Manhã</h2>
                <MenuBreakFast/>
                <h2>Almoço & Jantar</h2>
                <MenuAllDay/>
            </div> 
            <div class="pedido"><Command/></div> 
        </div> 
        
    )
}