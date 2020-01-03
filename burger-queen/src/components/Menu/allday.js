import Menu from '/home/laboratoria/Lab/SAP003-burger-queen/burger-queen/src/components/Menu/menu.js'
import React from 'react'
import MenuCard from '/home/laboratoria/Lab/SAP003-burger-queen/burger-queen/src/components/MenuCard/card.js'
import List from '/home/laboratoria/Lab/SAP003-burger-queen/burger-queen/src/components/list.js'

export default function MenuAllDay () {
    const allDay = Menu();
    const [itens,setItens] = useState([])

    const addItens = (newItem) => {
        setItens([...itens,newItem])
return(
    <div>
    {allDay.map((item)=> item.breakfast !==true ?
             <MenuCard 
                 name={item.name} 
                     handleClick={()=> List()}/> : false)}
    </div>
)
}
