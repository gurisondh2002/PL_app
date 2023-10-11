import React from 'react'
import styles from './login.module.css'

function Registration() {
  return (
    <div className={`${styles.containerMain}`} style={{ backgroundImage: `url('/assets/register.jpg')`}}>
    <br/>
    <br/>
    <div className={`${styles.loginContainer}`}>
        <h2>Login Here....</h2>
        <form className={`${styles.loginInput}`}>
            <label for='email'>Email:</label>
            <input id='email' type='email'  placeholder='Enter email...'/> 
            <br/>
            <label for='password'>Password:</label>
            <input id='password' type='password'  placeholder='Enter password...'/>
            <br/> 
            <button>Login</button>
            <br/>
            <p>Don't have an account? <a href="/login">Register Here</a></p>
        </form>
    </div>
    </div>
  )
}

export default Registration