import React, {useEffect, useState} from 'react';
import firebase from '/home/laboratoria/Lab/SAP003-burger-queen/burger-queen/src/utils/firebase.js';
import MenuCard from '/home/laboratoria/Lab/SAP003-burger-queen/burger-queen/src/components/MenuCard/card.js';

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
     <div>
        {itens.map(menuItem => 
          <MenuCard name={menuItem.name} price={menuItem.price} handleClick={()=> console.log(menuItem)}/>
        )}
     </div> 
    )
}