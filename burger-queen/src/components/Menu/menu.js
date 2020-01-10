import React, { useState, useEffect, useRef } from 'react';
import firebase from '../../utils/firebase.js';
import MenuCard from '../menuCard/menuCard'
import Modal from '../modal/modal'
import './style.css'


export default function Menu(props) {
    const [menu, setMenu] = useState([]);
    const [dropdown, setDropdown] = useState("");
    const modalRef = useRef(null);

    const toggleDropdown= () => {
      console.log("show");
      //se clicar no botão, modal aparece
      setDropdown("show");
      document.body.addEventListener("click", closeDropdown);
    }
  
    const closeDropdown= event => {
      event.stopPropagation(); //impede de executar listeners dos filhos
      const contain = modalRef.current.contains(event.target);
      if (!contain) { //se clicar fora do modal, ele DESaparece
        console.log("hidden");
        setDropdown("");
        document.body.removeEventListener("click", closeDropdown);
      }


    useEffect(() => {
        firebase.firestore().collection('Menu').get().then((snapshot) => {
            snapshot.forEach((doc) => {
                setMenu((currentState) => [...currentState, doc.data()]);
            });
        })
    }, [])

};    

    return (
        <div>
            <div>
                <h2>Café da Manhã</h2>
                {menu.map((item) => item.breakfast === true ?
                    <MenuCard
                        name={item.name}
                        handleClick={() => props.handleClick(item)} /> : false)}

            </div>
            <div>
                <div className="App">
                    <header className="App-header">
                        <button onClick={toggleDropdown}>Click Here!</button>
                        <Modal className={dropdown} modalRef={modalRef} />
                    </header>
                </div>
                <h2>Almoço & Jantar</h2>
                {menu.map((item) => item.breakfast !== true ?
                    <MenuCard
                        name={item.name}
                        handleClick={() => props.handleClick(item)} /> : false)}
            </div>
        </div>

    )
};

