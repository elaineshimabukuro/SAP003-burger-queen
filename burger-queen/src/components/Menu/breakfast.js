import Menu from '/home/laboratoria/Lab/SAP003-burger-queen/burger-queen/src/components/Menu/menu.js'
import React from 'react'
import MenuCard from '/home/laboratoria/Lab/SAP003-burger-queen/burger-queen/src/components/MenuCard/card.js'

export default function MenuBreakFast () {
    const allDay = Menu();

return(
    <div>
    {allDay.map((item)=> item.breakfast ===true ?
             <MenuCard 
                 name={item.name} 
                     handleClick={()=> console.log(item)}/> : false)}
    </div>
)
}