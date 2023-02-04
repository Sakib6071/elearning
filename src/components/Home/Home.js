import React from 'react';
import Banner from '../Banner/Banner';
import Class from '../Class/Class';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div className='bg-gray-300'>
            <Banner></Banner>
            <Class></Class>
            <Review></Review>
        </div>
    );
};

export default Home;