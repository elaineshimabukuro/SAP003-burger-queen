import React, {useState,useEffect}  from 'react';
import firebase from '/home/laboratoria/Lab/SAP003-burger-queen/burger-queen/src/utils/firebase.js';


export default function MenuBF (){
    const [itens,setItens] = useState ([]);

    useEffect(()=>{
        firebase.firestore().collection('Menu').get().then((snapshot) => {
            snapshot.forEach((doc) => {
                setItens(doc.data());
            });
        })
    },[])
     console.log(itens)
    return (
     <ul>
         {itens.map(item=> (
             <li>{item.name}</li>
         ))}
     </ul>
    )
  }