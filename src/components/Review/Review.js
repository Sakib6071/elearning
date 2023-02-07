import React, { useEffect, useState } from 'react';
import ReviewItem from '../ReviewItem/ReviewItem';


const Review = () => {
    const [reviews,setReviews]=useState([])
    useEffect(()=>{
        fetch('review.json')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
    return (
        <div className='bg-green-300 py-3'>
            <p className='text-center text-5xl text-black font-semibold py-5'>Review</p>
            <div className=' grid grid-cols-1 lg:grid-cols-3  gap-10 px-3 md:px-20 py-5'>
                {
                    reviews.map(review=><ReviewItem
                    key={review.id}
                    review={review}
                    ></ReviewItem>)
                }
            </div>
        </div>
    );
};

export default Review;