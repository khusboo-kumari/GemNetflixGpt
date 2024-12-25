import React, { useState, useRef } from 'react'
import Header from './Header'
import {checkValidData} from './../utils/validate' ; 

const Login = () => {
  const [signIn, setSignIn] = useState(true) ;  
  const [errorMsg, setErrorMsg] = useState(null) ; 

  const email = useRef(null) ; 
  const password = useRef(null) ; 
  const name = useRef(null) ; 
 
  const handleButtonClick = () =>{
    //  Validate the form data ; 
    // checkValidData(email , password) ;  // Reference is created by React using useRef Hook 
    console.log("Can u blow my mind ? ") ; 
    console.log(email.current.value) ; 
    console.log( password.current.value) ; 
    console.log(name.current.value) ; 
    const msg = checkValidData(email.current.value, password.current.value, name.current.value) ; 
    console.log(msg) ; 
    setErrorMsg(msg) ; 
  }

  const toggleSignInForm = () => {
    setSignIn(!signIn);
  }
  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/150c4b42-11f6-4576-a00f-c631308b1e43/web/IN-en-20241216-TRIFECTA-perspective_915a9055-68ad-4e81-b19a-442f1cd134dc_large.jpg' />
      </div>

      <form  onSubmit={(e) => e.preventDefault()} className='absolute p-12 w-3/12 bg-black bg-opacity-80     my-36 mx-auto right-0 left-0 text-white rounded-lg'>
        <h1 className='font-bold text-3xl py-4'>{signIn ? "Sign In" : "Sign Up"}</h1>
        {!signIn && (
          <input  ref={name} type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-800' />
        )}
        <input ref={email} type='text' placeholder='Email or mobile number' className='p-4 my-4  w-full bg-gray-800' />
        <input  ref={password} type='password' placeholder='Password' className='p-4 my-4  w-full bg-gray-800 ' />
        <p className='text-red-600 font-bold text-lg py-2'>{errorMsg}</p>
        <button type='submit' className='  p-3 my-2 bg-red-700  w-full rounded-lg' onClick={handleButtonClick}>{signIn ? "SignIn" : "Sign Up"}</button>
        <p className='text-white py-4' onClick={toggleSignInForm}>{!signIn ? "New to Netflix?  Sign up Now." : "Already a user ? Sign In"}</p>

      </form>

    </div>
  )
}

export default Login
