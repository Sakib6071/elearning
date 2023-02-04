import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../images/logo.png'
const Header = () => {
    const navigate = useNavigate()
    const handleClasses = () =>{
navigate('/home#classes')
let classes = document.getElementById("classes");
  classes && classes.scrollIntoView({behavior:"smooth"});
    }
    const handleLogo=()=>{
        navigate('/home')
    }
    return (
        <nav className=' bg-purple-800'>
            <div className='grid grid-cols-1 sm:grid-cols-3 md:mx-10 sm:mx-2 gap-2 text-center'>
                <div onClick={handleLogo} className=' w-2/3 mx-auto py-5'>
                    <img src={logo} alt="Logo" />
                </div>
                <div className='text-white text-center sm:col-span-2 py-3 grid grid-cols-5 md:lm-5 lg:ml-20'>
                    <div className=' text-center  flex justify-center  items-center text-xl font-semibold hover:text-green-400'>
                        <Link className='text-center' to={"/home"}>Home</Link>
                    </div>
                    <div className=' text-center  flex justify-center  items-center text-xl font-semibold hover:text-green-400'>
                        <button onClick={handleClasses} className='text-center'>Classes</button>
                    </div>
                    <div className=' text-center  flex justify-center  items-center text-xl font-semibold hover:text-green-400'>
                        <Link className='text-center' to={"/blogs"}>Blogs</Link>
                    </div>
                    <div className=' text-center  flex justify-center  items-center text-xl font-semibold hover:text-green-400'>
                        <Link className='text-center' to={"/about"}>About</Link>
                    </div>
                    <div className=' text-center  flex justify-center  items-center text-xl font-semibold hover:text-green-400'>
                        <Link className='text-center' to={"/login"}>Login</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;