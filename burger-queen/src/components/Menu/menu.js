import React, { useState, useEffect } from 'react';
import firebase from '/home/laboratoria/Lab/SAP003-burger-queen/burger-queen/src/utils/firebase.js';
import Card from '/home/laboratoria/Lab/SAP003-burger-queen/burger-queen/src/components/Card/card.js'


export default function Menu(props) {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        firebase.firestore().collection('Menu').get().then((snapshot) => {
            snapshot.forEach((doc) => {
                setMenu((currentState) => [...currentState, doc.data()]);
            });
        })
    }, [])


    return (
        <div>
            <div> 
                <h2>Café da Manhã</h2>
                    {menu.map((item)=> item.breakfast ===true ?
                     <Card 
                        name={item.name} 
                        handleClick={()=> props.handleClick(item)}/> : false)}
                        
            </div>
                 <div>
                    <h2>Almoço & Jantar</h2>
                        {menu.map((item)=> item.breakfast !==true ?
                          <Card 
                             name={item.name} 
                             handleClick={()=> props.handleClick(item)}/> : false)}
                </div>
        </div>
      
     ) 
};

//handleClick={()=> addItens(item.name)}/> : false)}