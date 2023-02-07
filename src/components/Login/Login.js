import React, { useEffect, useRef } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const emailRef = useRef();
  const [signInWithEmailAndPassword, emailUser, emailLoading, emailError] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const navigate = useNavigate();

  /* Login Form handle */
  const handleLoginForm = (e) => {
    e.preventDefault();
    /* input value taking */
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(email, password);
  };

  const location = useLocation();

  useEffect(() => {
    if (emailUser) {
      const from = location.state?.from?.pathname || "/";
      navigate(from, { replace: true });
    }
  }, [emailUser]);

  if (emailLoading) {
    return <Loading></Loading>;
  }

  /* Forget password module */
  const handleForgetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent Password Reset Email");
    } else {
      toast("Please Enter Your Email First");
    }
  };

  return (
    <div className="py-5">
      <div className="mt-5 w-4/5 md:w-2/5 mx-auto bg-gray-700 rounded-lg px-10 py-8">
        <p className="text-center my-5 text-3xl text-green-500">Login Here</p>
        <form onSubmit={handleLoginForm}>
          <div className="email-field">
            <label className="text-white text-xl">Enter Your Email</label>{" "}
            <br />
            <input
              ref={emailRef}
              className=" px-2 py-3 w-full rounded-lg"
              type="email"
              placeholder="Your Email"
              name="email"
              required
            />
          </div>

          <div className="password-field my-5">
            <label className="text-white text-xl">Enter Password</label> <br />
            <input
              className=" px-2 py-3 w-full rounded-lg"
              type="password"
              placeholder="Password"
              name="password"
              required
            />
          </div>
          <p className="text-red-500 text-center">{emailError?.message}</p>
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
            New here?{" "}
            <Link className="text-green-500" to={"/register"}>
              Register
            </Link>
          </p>
        </div>
        <div className="forget-password mt-1 mb-5">
          <button
            onClick={handleForgetPassword}
            className="text-gray-400 text-sm"
          >
            Forget Password?
          </button>
        </div>
        <SocialLogin></SocialLogin>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;
