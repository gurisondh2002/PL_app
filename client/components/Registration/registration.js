import React from 'react'
import styles from './registration.module.css'

function Registration() {
  return (
    <div className={`${styles.containerMain}`} style={{ backgroundImage: `url('/assets/register.jpg')`}}>
    <br/>
    <br/>
    <div className={`${styles.registerContainer}`}>
        <h2>Register Here....</h2>
        <form className={`${styles.registerInput}`}>
            <label for='first_name'>First Name:</label>
            <input id='first_name' type='text'  placeholder='Enter first name...'/> 
            <br/>
            <label for='last_name'>Last Name:</label>
            <input id='last_name' type='text'  placeholder='Enter last name...'/>
            <br/> 
            <label for='email'>Email:</label>
            <input id='email' type='email'  placeholder='Enter email...'/> 
            <br/>
            <label for='password'>Password:</label>
            <input id='password' type='password'  placeholder='Enter password...'/>
            <br/> 
            <button>Register</button>
            <br/>
            <p>Already have an account? <a href="/login">Login Here</a></p>
        </form>
    </div>
    </div>
  )
}

export default Registration