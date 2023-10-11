'use client'
import dynamic from "next/dynamic"
import styles from './login.module.css'
import { useRouter } from 'next/navigation'
import { useState } from "react"

const handleLogin = async(data) =>{
    const res = await fetch('http://localhost:3001/user/login', { 
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
  const router = useRouter()
  const [displayMessage, setDisplayMessage] = useState('')
    const [data, setData] = useState({
        email: "",
        password: "",
    })

    const handleEmailChange = (e) => {
        e.preventDefault();
        setData((prevState) => {
            return { ...prevState, email: e.target.value }
        })
    }
    const handlePasswordChange = (e) => {
        e.preventDefault();
        setData((prevState) => {
            return { ...prevState, password: e.target.value }
        })
    }
    const handleSubmit = async (e) => {
      e.preventDefault()
      const res = await handleLogin(data)
      console.log(res)
      if (res.message == "Logged In Successfully") {
          localStorage.setItem('email',res.email);
          localStorage.setItem('isAdmin',res.isAdmin)
          console.log(localStorage.getItem('email'))
          console.log(localStorage.getItem('isAdmin'))
          router.push("/")
      }else{
          setDisplayMessage(res.message)
      }
  }
    return (
        <div className={`${styles.containerMain}`} style={{ backgroundImage: `url('/assets/register.jpg')`}}>
            <br />
            <br />
            <div className={`${styles.loginContainer}`}>
                <h2>Login</h2>
                <form className={`${styles.loginInput}`}>
                    <label for='email'>Email:</label>
                    <input value={data.email} id='email' type='email' placeholder='Enter email...' onChange={handleEmailChange}/>
                    <br />
                    <label for='password'>Password:</label>
                    <input value={data.password} id='password' type='password' placeholder='Enter password...' onChange={handlePasswordChange}/>
                    <br />
                    <button onClick={handleSubmit}>Login</button>
                    <br />
                    <p>Don't have an account? <a href="/registration" style={{color:"black"}}>Register Here</a></p>
                </form>
            </div>
        </div>


    )
}

export default Login
 