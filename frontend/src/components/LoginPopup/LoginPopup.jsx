import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {
  
  
   const [currState,setCurrState]=useState("Login") 
   
    return (
    <div className='login-popup'>
      <form className="login-popu-contaier">
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon}/>
        </div>
        <div className="login-popup-inputs">
            {currState==="Login"?<></>:<input type="text" placeholder='yourname' required/>}
            
            <input type="email" placeholder='your email' required/>
            <input type="password" placeholder='password' required/>
        </div>
        <button>{currState==="sin Up"?"Create account":"Login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" required/>
            <p>By continuing, i agree to the terms of use & privicy policy.</p>
        </div>
        {currState==="Login"
        ?<p>Create a new account? <span onClick={()=>setCurrState("Sin Up")}>Click here</span></p>
        :<p>Already have an account? <span onClick={()=>setCurrState("Login")}> Login here</span></p>
        }
        
        
      </form>
    </div>
  )
}

export default LoginPopup