import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useJuniorClassDetail from "../../useHooks/useJuniorClassDetail";
import auth from "../../firebase.init.js";
import { useAuthState } from "react-firebase-hooks/auth";
import useSeniorClassDetail from "../../useHooks/useSeniorClassDetail";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import PageTitle from "../PageTitle/PageTitle";

const Checkout = () => {
    const [error,setError]=useState('')
    const navigate = useNavigate()
  const [user] = useAuthState(auth);
  const [subjects] = useJuniorClassDetail([]);
  const [ssubjects] = useSeniorClassDetail([]);
  
  const { JS,ID,Level } = useParams();
  const specificItem = subjects.find(
    (subject) => parseInt(subject.id) === parseInt(ID)
  );
  const specificItemSenior = ssubjects.find(
    (subject) => parseInt(subject.id) === parseInt(ID)
  );
  const handleForm = e =>{
    e.preventDefault()
    const mobile = e.target.mobile.value;
    if(mobile){
      toast('Thanks for enroll your course')
        // navigate('/home')
    }
    else{
        setError('Enter Your Mobile Number')
        toast('Enter Your Mobile Number first')
    }
  }
  return (
    <div>
      <PageTitle title={"Checkout"}></PageTitle>
      <p className="text-center text-5xl text-green-700 font-semibold my-10">Checkout</p>

      <form className="text-xl p-2 md:w-1/2 mx-auto" onSubmit={handleForm}>
        <div className="block   mx-auto border-b-2 my-4">
          <label className="font-semibold mr-2" htmlFor="name">User Name : </label>
          <input className="focus:outline-none" type="text" name="name" id="" readOnly defaultValue={user?.displayName} />
        </div>

        <div className="block   mx-auto border-b-2 my-4">
            <label className="font-semibold mr-2" htmlFor="email">Email : </label>
        <input
          className=" w-3/4 focus:outline-none"
          type="email"
          name="email"
          id=""
          readOnly defaultValue={user?.email}
        />
        </div>

        
        <div className="block   mx-auto border-b-2 my-4">
            <label className="font-semibold mr-2" htmlFor="fee">Class : </label>
        <input
          className="focus:outline-none"
          type="text"
          name="class"
          id=""
          readOnly defaultValue={Level}
        />
        </div>
        <div className="block   mx-auto border-b-2 my-4">
            <label className="font-semibold mr-2" htmlFor="subject">Subject : </label>
        <input
          className="focus:outline-none"
          type="text"
          name="subject"
          id=""
          readOnly defaultValue={JS==='senior'?(specificItemSenior?.subjectName):(specificItem?.subjectName)}
        />
        </div>
        <div className="block   mx-auto border-b-2 my-4">
            <label className="font-semibold mr-2" htmlFor="fee">Course Fee : </label>
        <input
          className="focus:outline-none"
          type="text"
          name="fee"
          id=""
          readOnly defaultValue={JS==='senior'?(specificItemSenior?.fee):(specificItem?.fee)}
        />
        </div>
        
        <div className="block   mx-auto border-b-2 my-4">
            <label className="font-semibold mr-2" htmlFor="mobile">Mobile : </label>
        <input
          className="w-3/4 focus:outline-none"
          type="tel"
          name="mobile"
          id=""
          placeholder="Your Phone Number"
        />
        </div>
        <p className="  mx-auto my-4 text-red-500 text-base italic">{error}</p>
        <div className=" cursor-pointer submit block   mx-auto mt-7 mb-16 text-center bg-green-700 text-white p-2 text-xl font-semibold rounded-lg">
            <input className=" cursor-pointer" type="submit" value="Confirm Payment" />
        </div>
      </form>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Checkout;
