import React from 'react';
import profile from '../Images/profile.png';
const Header = () => {
    return (
        <div className='w-[1280px] m-auto mt-6'>
            <nav className='flex justify-between items-center'>
                <h1 className='text-3xl font-extrabold'>Knowledge Cafe</h1>
                <img src={profile} alt="" />
            </nav>
            <div className='border mt-2'></div>
        </div>
    );
};

export default Header;