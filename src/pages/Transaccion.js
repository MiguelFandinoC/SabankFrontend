import React, {useState} from 'react';
import Axios from 'axios';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import { useLocation } from "react-router-dom";

export default function Transaccion(props) {
    const [num,setNum] = useState("");
    const [dineroTran, setDinerTran] = useState(0);
    const [falloBusqueda, setFalloBusqueda] = useState("");
    const location = useLocation();
    const state = location.state;
    console.log(state.accountNum)
    const accNum =state.accountNum
    const transaccion = (props) => {
        if(dineroTran > state.userBalance){
          console.log("no hay tanta plata pa");
        }else{
          Axios.post("http://localhost:3001/transaccion",
          {num: num,
            dineroTran: dineroTran,  
          accNum: accNum
          }).then((response) => {
            if(response.data.message){
              console.log(response.data.message)
              setFalloBusqueda(response.data.message);
            }else{
              //console.log(response.data[0])
              setFalloBusqueda("");
            }
          })
        }

      }

  return (

    
    <div className='login'>
        <h1>Transaccion</h1>
        
        <input type="text" placeholder='Cuenta' onChange={(e) => {
            setNum(e.target.value)
        }}></input>
        <input type="text" placeholder='Valor' onChange={(e) => {
            setDinerTran(e.target.value)
        }}></input>
        <button onClick={transaccion}>Realizar pago</button>
        <p>{falloBusqueda}</p>
    </div>
  )
}
