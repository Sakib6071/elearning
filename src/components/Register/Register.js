import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth'
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
  const [error,setError]=useState('')
  const navigate = useNavigate()
  const [
    createUserWithEmailAndPassword,
    registerUser,
    registeLoading,
    registerError,
  ] = useCreateUserWithEmailAndPassword(auth);
  const handleRegisterForm = e =>{
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    if(password!==confirmPassword){
      setError('Password Mismatch')
      return
    }
    else{
        createUserWithEmailAndPassword(email,password)
        navigate('/')
    }
  }
    return (
        <div>
        <div className="my-5 w-4/5 md:w-2/5 mx-auto bg-gray-700 rounded-lg px-10 py-8">
          <p className="text-center my-5 text-3xl text-green-500">Register Here</p>
          <form onSubmit={handleRegisterForm}>
            <div className="email-field">
              <label className="text-white text-xl">Enter Your Email</label>
              <br />
              <input
                className=" px-2 py-3 w-full rounded-lg"
                type="email"
                placeholder="Your Email"
                name="email"
                required
                
              />
            </div>
  
            <div className="password-field my-5">
              <label className="text-white text-xl">Set Password</label> <br />
              <input
                
                className=" px-2 py-3 w-full rounded-lg"
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </div>
  
            <div className="confirm-password-field">
              <label className="text-white text-xl">Confirm Password</label>{" "}
              <br />
              <input
                
                className=" px-2 py-3 w-full rounded-lg"
                type="password"
                name='confirmPassword'
                placeholder="Retype Password"
                required
              />
            </div>
            <div>
              {<span className="text-red-500 text-center">{error || registerError}</span>}
            </div>
            <div className="register-button mt-5 text-right">
              <input
                className="hover:cursor-pointer w-full bg-green-500 text-black px-5 py-2 text-xl font-semibold rounded-lg"
                type="submit"
                value="Register"
              />
            </div>
          </form>
          <div className="already-account mt-2 mb-5">
            <p className=" text-gray-300">
              Already have an account?{" "}
              <Link className="text-green-500" to={"/login"}>
                Login
              </Link>
            </p>
          </div>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    );
};

export default Register;