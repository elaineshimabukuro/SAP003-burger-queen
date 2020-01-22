import React, { useState, useEffect } from 'react';
import firebase from '../../utils/firebase.js';
import MenuCard from '../menuCard/menuCard'


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
                     <MenuCard 
                        name={item.name} 
                        handleClick={()=> props.handleClick(item)}/> : false)}
                        
            </div>
                 <div>
                    <h2>Almoço & Jantar</h2>
                        {menu.map((item)=> item.breakfast !==true ?
                          <MenuCard 
                             name={item.name} 
                             handleClick={()=> props.handleClick(item)}/> : false)}
                </div>
        </div>
      
     ) 
};
