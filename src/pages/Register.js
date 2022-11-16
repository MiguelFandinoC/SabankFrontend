import React, {useState, useEffect} from 'react';
import Axios from 'axios';
export default function Register() {
  //Register
  const [userNameReg,setUsernameReg] = useState("");
  const [passwordReg,setPasswordReg] = useState("");
  const [balanceReg,setBalanceReg] = useState(0.0);
  const [typeReg,setTypeReg] = useState("");
  const [accountNum,setAccountNum] = useState(0);
  
  const register = () => {
    Axios.post("http://localhost:3001/register",
    {username: userNameReg,
      password: passwordReg,
      balance: balanceReg,
      type: typeReg,
      num: accountNum
    }).then((response) => {
    })
  }
  return (
    <div className='Login'>
    <h1>Portal transaccional</h1>
    <div className='register'>
      <h1>Registration</h1>
      <label>Username</label>
      <input type="text" onChange={(e) => {
        setUsernameReg(e.target.value)
      }}></input>
      <label>Password</label>
      <input type="password" onChange={(e) => {
        setPasswordReg(e.target.value)
      }}></input>
      <label>Balance</label>
      <input type="text" onChange={(e) => {
        setBalanceReg(e.target.value)
      }}></input>
      <label>Account type</label>
      <input type="text" onChange={(e) => {
        setTypeReg(e.target.value)
      }}></input>
      <label>Account num</label>
      <input type="text" onChange={(e) => {
        setAccountNum(e.target.value)
      }}></input>
      <button onClick={register}>Create account</button>
    </div>
  </div>
  )
}
