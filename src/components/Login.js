import React, { useState, useRef } from 'react'
import Header from './Header'
import { checkValidData } from './../utils/validate';
// import { getAuth, onAuthStateChanged } from "firebase/auth";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
// import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_URL, photoURL } from '../utils/constant';



const Login = () => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const [signIn, setSignIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = () => {
    //  Validate the form data ; 
    // checkValidData(email , password) ;  // Reference is created by React using useRef Hook here . 

    console.log("Can u blow my mind ? ");
    console.log(email.current?.value);
    console.log(password.current?.value);
    console.log(name.current?.value);

    const msg = checkValidData(email.current?.value, password.current?.value); // Pass an empty string if name.current is null
    console.log(msg);
    setErrorMsg(msg);
    if (msg) return;

    if (!signIn) {
      //  signUp Logic 
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Sign Up  
          const user = userCredential.user;
          //  Once the user is created, let us now update the user . 
          updateProfile(user, {
            displayName: name.current.value, photoURL: photoURL
          }).then(() => {
            // Profile updated!
            const {uid, email, displayName, photoURL} = auth.currentUser ; 
            dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));

            // navigate('/browse');
          }).catch((error) => {
            // An error occurred
            setErrorMsg(errorMsg);
          });
          console.log(user);
          // navigate('/browse');
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + " " + errorMessage);
          // ..
        });
    } else {
      // Sign In Logic to be here only . 
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
          // navigate('/browse');

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + " " + errorMessage);
        });

    }
  }

  const toggleSignInForm = () => {
    setSignIn(!signIn);
  }
  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src={BG_URL}/>
      </div>

      <form onSubmit={(e) => e.preventDefault()} className='absolute p-12 w-3/12 bg-black bg-opacity-80     my-36 mx-auto right-0 left-0 text-white rounded-lg'>
        <h1 className='font-bold text-3xl py-4'>{signIn ? "Sign In" : "Sign Up"}</h1>
        {!signIn && (
          <input ref={name} type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-800' />
        )}
        <input ref={email} type='text' placeholder='Enter your Email ' className='p-4 my-4  w-full bg-gray-800' />
        <input ref={password} type='password' placeholder='Password' className='p-4 my-4  w-full bg-gray-800 ' />
        <p className='text-red-600 font-bold text-lg py-2'>{errorMsg}</p>
        <button type='submit' className='  p-3 my-2 bg-red-700  w-full rounded-lg' onClick={handleButtonClick}>{signIn ? "SignIn" : "Sign Up"}</button>
        <p className='text-white py-4' onClick={toggleSignInForm}>{!signIn ? "New to Netflix?  Sign up Now." : "Already a user ? Sign In"}</p>

      </form>

    </div>
  )
}

export default Login
