import React from 'react';
import Banner from '../Banner/Banner';
import Class from '../Class/Class';
import PageTitle from '../PageTitle/PageTitle';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div className='bg-gray-300'>
            <PageTitle title={"Home"}></PageTitle>
            <Banner></Banner>
            <Class></Class>
            <Review></Review>
        </div>
    );
};

export default Home;