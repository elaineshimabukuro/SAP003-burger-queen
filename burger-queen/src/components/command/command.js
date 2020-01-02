import React from 'react';
import './style.css'
//import Button from './components/Button/button.js'

export default function Command (){
    return (
     <div>
         <form class="command">
             <label for="client">Cliente</label>
                <input class="client" type= "text" placeholder="Cliente"></input>
                    <label for="table">Mesa</label>
                        <input class="table" type= "text" placeholder="Mesa"></input>
         </form>
        
     </div>
    )
  }