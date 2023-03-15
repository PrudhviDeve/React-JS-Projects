import React,{useState} from 'react'
import './Login.css'
import {Link, useNavigate} from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from './Firebase'

function Login() {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState('')
    

    const navigate = useNavigate()

    // const auth = getAuth()

    

    const login = e => {
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password)
          .then((userCredential) => {
            //logged In, redirect to homepage
            navigate("/")
          })
          .catch(e => alert(e.message))
        

    }

    const register = e => {
        e.preventDefault();
         createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            //created a user and logged in, redirect to homepage
            navigate("/")
        })
        .catch(e => alert(e.message))

    }
  return (
    <div className='login'>
        <Link to="/">
            <img 
              className='login__logo'
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
              alt=''
            />
        </Link>

        <div className='login__container'>
            <h1>Sign In</h1>
            <form>
                <h5>E-mail</h5>
                <input value={email} onChange={e => setEmail(e.target.value)} type="email" />
                <h5>Password</h5>
                <input value={password} onChange={e => setPassword(e.target.value)} type="password" />
                <button type='submit' onClick={login} className='login__signInButton'>Sign In</button>
            </form>
            <p>
                By signing-in you agree to Amazon's Conditions of Use and Sale. Please see our Privacy 
                Notice, our Cookies Notice and oir Interest-Based Ads Notice.
            </p>
            <button onClick={register} className='login__registerButton'>Create your Amazon account</button>
        </div>
    </div>
  )
}

export default Login