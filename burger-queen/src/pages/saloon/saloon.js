import React, {useEffect, useState} from 'react';
import firebase from '/home/laboratoria/Lab/SAP003-burger-queen/burger-queen/src/utils/firebase.js';
import MenuCard from '/home/laboratoria/Lab/SAP003-burger-queen/burger-queen/src/components/MenuCard/card.js';
import Command from '/home/laboratoria/Lab/SAP003-burger-queen/burger-queen/src/components/command/command.js'
import './style.css'

export default function Saloon (){
    const [itens, setItens] = useState ([]);
   
    useEffect(()=> {
        firebase.firestore().collection('Menu').get().then((snapshot) => {
            snapshot.forEach((doc) => {
                setItens((currentState) => [...currentState, doc.data()]);
            });
        })
    },[])

    return (
        <div class='container'>
            <div class="itens">
                <h1>Menu</h1>
                {itens.map(menuItem => 
                    <MenuCard 
                        name={menuItem.name} 
                            price={menuItem.price} 
                                handleClick={()=> console.log(menuItem)}/>
                )} 
            </div> 
            <div class="command"><Command/></div> 
        </div> 
        
    )
}