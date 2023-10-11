'use client'
import React, { useState } from 'react'
import styles from './login.module.css'

function Login() {
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");

  const emailChange = (e) =>{
    setEmail(e.target.value)
  }
  const passwordChange = (e) =>{
    setPassword(e.target.value)
  }
  const handleLoginClick = (e) =>{
    e.preventDefault();
    console.log(email, password);
    setEmail("");
    setPassword("");
  }
  return (
    <div className={`${styles.containerMain}`} style={{ backgroundImage: `url('/assets/register.jpg')`}}>
    <br/>
    <br/>
    <div className={`${styles.loginContainer}`}>
        <h2>Login Here....</h2>
        <form className={`${styles.loginInput}`}>
            <label for='email'>Email:</label>
            <input id='email' type='email' value={email} placeholder='Enter email...' onChange={emailChange}/> 
            <br/>
            <label for='password'>Password:</label>
            <input id='password' type='password' value={password}  placeholder='Enter password...' onChange={passwordChange}/>
            <br/> 
            <button onClick={handleLoginClick}>Login</button>
            <br/>
            <p>Don't have an account? <a href="/registration">Register Here</a></p>
        </form>
    </div>
    </div>
  )
}

export default Login