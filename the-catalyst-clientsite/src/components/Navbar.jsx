import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
      navigate('/login'); // Replace '/login' with your actual login route
    };
    return (
        
        <div className='bg-gray-400 py-3'>
            <div className='flex items-center  gap-80 px-48 '>

            <img className='w-36 h-36 ' src="https://www.bracu.ac.bd/sites/all/themes/sloth/logo.svg" alt="" />
            <div className="">
                <h1 className='pt-2  text-5xl text-blue-200 text-blue-300 '>BRACU OCA</h1>
            </div>
            <div className='btn bg-orange-300' onClick={handleLoginClick}>Login</div>
            
            </div>

        </div>
    );
};

export default Navbar;