'use client'
import React, { useState } from 'react'
import styles from './login.module.css'

const loginHandler = async(data) =>{
  const res = await fetch('http://localhost:3001/user/register', { 
      cache: 'no-cache' ,
      method: "POST",
      body: JSON.stringify(data),
      headers: {
          'Content-Type': 'application/json', // Ensure that the content type is set to JSON
        },
  })
  const resRef = await res.json()
  return resRef
}

function Login() {
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");

  const emailChange = (e) =>{
    setEmail((prevState) => {
      return { ...prevState, email:e.target.value }
  })
  }
  const passwordChange = (e) =>{
    setPassword((prevState) => {
      return { ...prevState, password: e.target.value }
  })
  }
  const handleLoginClick = async(e) =>{
    e.preventDefault()
    const result = await loginHandler(data)
    console.log(result)
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
            <p>Don't have an account? <a href="/register">Register Here</a></p>
        </form>
    </div>
    </div>
  )
}

export default Login