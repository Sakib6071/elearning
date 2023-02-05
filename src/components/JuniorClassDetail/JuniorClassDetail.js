import React from 'react';
import { useNavigate } from 'react-router-dom';

const JuniorClassDetail = ({subject,classLevel}) => {
    const {id,subjectName,description,fee,photo}=subject;
    const url = `/checkout/${id}/${classLevel}`
    const navigate = useNavigate()
    const handleBuyNow = () =>{
            navigate(url)
    }
    return (
        <div className='bg-gray-300 border-2 border-green-400 rounded-lg relative'>
            <img className=' w-full rounded-t-lg' src={photo} alt="banner" />
            <p className='text-2xl px-2 font-semibold'>Class {classLevel}</p>
            <p className='text-2xl px-2 font-semibold py-2'>{subjectName}</p>
            <p className='px-2'>{description}</p>
            <p className='text-2xl font-semibold p-2 mb-5'>{fee} &#2547;</p>
            <br />
            <button
            onClick={handleBuyNow}
            className=' absolute bottom-0 text-2xl text-center p-2 font-semibold bg-black text-white block w-full rounded-b-lg'>Buy Now</button>
        </div>
    );
};

export default JuniorClassDetail;