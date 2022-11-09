import React from 'react';
import { Link } from 'react-router-dom';

const MyReview = () => {
    return (
        <div className='max-w-screen-xl mx-auto py-20'>
            <h2 className='text-center text-4xl'>Sorry, You didn't Create Review yet</h2>
            <button className='btn border-none bg-blue-500'>
            <Link to='/allReviews'><p className='text-white'>Another Review</p></Link>
            </button>
        </div>
    );
};

export default MyReview;