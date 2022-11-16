import React, {useState} from 'react';
import Axios from 'axios';
import {BrowserRouter as Router, Link} from 'react-router-dom';
export default function Login() {

 //Login  
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  //Login status
  const [loggedNum,setloggedNum] = useState("");
  const [loginInfo, setLoginInfo] = useState("");
  const [isLogged, setIsLogged] = useState(false);

  

function Button({children}) {
    return <button>{children}</button>;
  }

  const login = (props) => {
    Axios.post("http://localhost:3001/login",
    {username: username,
      password: password,
    }).then((response) => {
      if(response.data.message){
        setloggedNum(response.data.message)
        setIsLogged(false)
      }else{
        setloggedNum(response.data[0].accountNum)
        setLoginInfo(response.data[0])
        setIsLogged(true)
      }
    })
  }
  return (
    
    <div className='login'>
    
        <h1>Portal transaccional</h1>

      
        {isLogged ==true ?
        <div>
        <h1>Hola {loginInfo.userName}</h1>
        <p>Tu numero de cuenta: {loginInfo.accountNum}</p>
        <p>Tu balance: {loginInfo.userBalance}</p>
        <p>Tu tipo de cuenta: {loginInfo.accountType}</p>

        <Link to="/transaccion" state={loginInfo}>
          <Button>Realizar transaccion</Button>
        </Link>
  
        <button onClick={() => {
            setIsLogged(false)
            setloggedNum("")}}
            >Cerrar sesion</button>
        </div>
        : 
        <div>
        <h1>Login</h1>

        <input type="text" placeholder="Username..." onChange={(e) => {
            setUsername(e.target.value)
        }}></input>

        <input type="password" placeholder="Password..." onChange={(e) => {
            setPassword(e.target.value)
        }}></input>
          <button onClick={login}>Login</button>
          <p>{loggedNum}</p>
        </div>
        }
    </div>
    
  )
}
