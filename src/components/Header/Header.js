import React from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import CustomLink from '../../CustomLink/CustomLink';
import auth from '../../firebase.init';
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
    const [user] = useAuthState(auth);
    const [signOut] = useSignOut(auth);
    
    const handleLogout=()=>{
        signOut()
navigate('/login')
    }
    return (
        <nav className=' bg-purple-800 sticky top-0 z-50'>
            <div className='grid grid-cols-1 sm:grid-cols-3 md:mx-10 sm:mx-2 gap-2 text-center'>
                <div onClick={handleLogo} className=' w-2/3 mx-auto py-5'>
                    <img src={logo} alt="Logo" />
                </div>
                <div className='text-white text-center sm:col-span-2 py-3 grid grid-cols-5 md:lm-5 lg:ml-20'>
                    <div className=' text-center  flex justify-center  items-center text-xl font-semibold hover:text-green-400'>
                        <CustomLink className='text-center pb-2' to={"/home"}>Home</CustomLink>
                    </div>
                    <div className=' text-center  flex justify-center  items-center text-xl font-semibold hover:text-green-400'>
                        <button onClick={handleClasses} className='text-center'>Classes</button>
                    </div>
                    <div className=' text-center  flex justify-center  items-center text-xl font-semibold hover:text-green-400'>
                        <CustomLink className='text-center pb-2' to={"/blogs"}>Blogs</CustomLink>
                    </div>
                    <div className=' text-center  flex justify-center  items-center text-xl font-semibold hover:text-green-400'>
                        <CustomLink className='text-center pb-2' to={"/about"}>About</CustomLink>
                    </div>
                    {
                        user?
                        
                        <div className=' text-center  flex justify-center  items-center text-xl font-semibold hover:text-green-400'>
                        <button className='text-center' onClick={handleLogout}>Logout</button>
                    </div>
                    :
                    <div className=' text-center  flex justify-center  items-center text-xl font-semibold hover:text-green-400'>
                        <CustomLink className='text-center pb-2' to={"/login"}>Login</CustomLink>
                    </div>
                        
                    }
                </div>
            </div>
        </nav>
    );
};

export default Header;