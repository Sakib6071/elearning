import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='py-5'>
        <div className="mt-5 w-2/5 mx-auto bg-gray-700 rounded-lg px-10 py-8">
          <p className="text-center text-3xl text-green-500">Login Here</p>
          <form>
            <div className="email-field">
              <label className="text-white text-xl">Enter Your Email</label>{" "}
              <br />
              <input
              
                className=" px-2 py-3 w-full rounded-lg"
                type="email"
                placeholder="Your Email"
                name="email"
              />
            </div>
  
            <div className="password-field my-5">
              <label className="text-white text-xl">Enter Password</label> <br />
              <input
              
                className=" px-2 py-3 w-full rounded-lg"
                type="password"
                placeholder="Password"
                name="password"
              />
            </div>
          <p className="text-red-500 text-center">{/* error?.message */}</p>
            <div className="login-button mt-5 text-right">
              <input
                className="hover:cursor-pointer w-full bg-green-500 text-white px-5 py-2 text-xl font-semibold rounded-lg"
                type="submit"
                value="Login"
              />
            </div>
          </form>
          <div className="new-user mt-2">
            <p className=" text-gray-300">
              New here? <Link className="text-green-500" to={"/register"}>
                Register
              </Link>
            </p>
          </div>
          <div className="forget-password mt-1 mb-5">
            <button className='text-gray-400 text-sm'>Forget Password?</button>
          </div>
          <div className="or w-4/5 mx-auto mb-5">
            <hr className=" w-2/5 inline-block" />
            <span className="text-center text-gray-300 inline-block w-1/5">
              or
            </span>
            <hr className=" w-2/5 inline-block" />
          </div>
          <div className="sign-in-google">
            <button className="text-white py-3 px-2 my-2 text-left w-full border-2 rounded-lg">
              <FontAwesomeIcon
                className=" w-1/6 inline-block text-left"
                icon={faGoogle}
                size={"xl"}
              ></FontAwesomeIcon>
              <span className="text-center w-5/6 mx-auto inline-block ">
                Continue With Google
              </span>
            </button>
          </div>
        </div>
      </div>
    );
};

export default Login;