import React from 'react'
const logo = require("./../public/Netflix_Logo_PMS.png");

const Header = () => {
    return (
        <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10'> 
            <img className='w-44' src={logo} />  
        </div> 
    )
}

export default Header ; 


