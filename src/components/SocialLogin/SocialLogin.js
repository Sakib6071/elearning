import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const SocialLogin = () => {
  
  const location = useLocation()
  const from = location.state?.from?.pathname || "/"
  const navigate = useNavigate();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };
 
  useEffect(()=>{
    if (user) {
      navigate(from,{replace:true})
    }
  },[user])
  return (
    <div>
      <div className="or w-4/5 mx-auto mb-5">
        <hr className=" w-2/5 inline-block" />
        <span className="text-center text-gray-300 inline-block w-1/5">or</span>
        <hr className=" w-2/5 inline-block" />
      </div>
      <div className="sign-in-google">
        <button
          onClick={handleGoogleSignIn}
          className="text-white py-3 px-2 my-2 text-left w-full border-2 rounded-lg"
        >
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
  );
};

export default SocialLogin;
