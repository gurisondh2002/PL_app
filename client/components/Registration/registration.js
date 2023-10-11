'use client'
import React from 'react'
import styles from './registration.module.css'
import { useState } from 'react';

function Registration() {

  const [firstName , setFirstName] = useState("");
  const [lastName , setLastName] = useState("");
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");

  const firstNameChange = (e) =>{
    setFirstName(e.target.value)
  }
  const lastNameChange = (e) =>{
    setLastName(e.target.value)
  }

  const emailChange = (e) =>{
    setEmail(e.target.value)
  }
  const passwordChange = (e) =>{
    setPassword(e.target.value)
  }
  const handleRegisterClick = (e) =>{
    e.preventDefault();
    console.log(firstName, lastName, email, password);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  }
  return (
    <div className={`${styles.containerMain}`} style={{ backgroundImage: `url('/assets/register.jpg')`}}>
    <br/>
    <br/>
    <div className={`${styles.registerContainer}`}>
        <h2>Register Here....</h2>
        <form className={`${styles.registerInput}`}>
            <label for='first_name'>First Name:</label>
            <input id='first_name' type='text' value={firstName} placeholder='Enter first name...' onChange={firstNameChange}/> 
            <br/>
            <label for='last_name'>Last Name:</label>
            <input id='last_name' type='text' value={lastName} placeholder='Enter last name...' onChange={lastNameChange}/>
            <br/> 
            <label for='email'>Email:</label>
            <input id='email' type='email' value={email} placeholder='Enter email...' onChange={emailChange}/> 
            <br/>
            <label for='password'>Password:</label>
            <input id='password' type='password' vakue={password}  placeholder='Enter password...' onChange={passwordChange}/>
            <br/> 
            <button onClick={handleRegisterClick}>Register</button>
            <br/>
            <p>Already have an account? <a href="/login">Login Here</a></p>
        </form>
    </div>
    </div>
  )
}

export default Registration