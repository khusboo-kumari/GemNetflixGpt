import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from 'react';
import { addUser, removeUser } from '../utils/userSlice';
import { toggleGPTSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constant";
import { changeLanguage } from "../utils/configSlice";

const logo = require("./../public/Netflix_Logo_PMS.png");



const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch(); // Now , use this dispatch to dispatch an action . 

    const user = useSelector(store => store.user); // subscribe to the store . 
    const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch) ;
    const handleSignOut = () => {
        signOut(auth).then(() => {
            // navigate('/') ; 

        }).catch((error) => {
            // An error happened.
            navigate('/error');
        });
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                navigate("/browse");
            } else {
                dispatch(removeUser());
                navigate("/");

            }
        });
        return () => unsubscribe();  // unsubscribe when  the component unmounts . 
    }, []);

    const handleGPTSearch = () => {
        //  Toggle GPT Search Functionality  
        dispatch(toggleGPTSearchView());
    }
    const handleLanguageChange = (e) =>{
        console.log(e.target.value);
        dispatch(changeLanguage(e.target.value)) ; 
    }
    return (
        <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
            <img className='w-44' src={logo} alt='logo' />
            {user && (<div className='flex p-2'>
               { showGPTSearch && 
                (
                    <select className="p-2 m-2 bg-gray-900 text-white" onChange={handleLanguageChange}> 
                    {SUPPORTED_LANGUAGES.map((lang) => (
                        <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
                    ))}
                </select>
                )
               }
                <button onClick={handleGPTSearch} className="py-2 px-4 mx-4 my-2 bg-purple-600 text-white rounded-lg">
                   {showGPTSearch? "HomePage" : "GPT Search"}
                </button>
                <img className='w-11 h-11' src={user?.photoURL}
                    alt='userIcon'
                />
                <button className='font-bold text-white' onClick={handleSignOut}>(Sign Out)</button>
            </div>)}
        </div>
    )
}

export default Header;



