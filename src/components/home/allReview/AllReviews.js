import React from 'react';
import useTitle from '../../../title/title';

const AllReviews = () => {
    useTitle('All Review')
    return (
        <div className='p-10 max-w-screen-xl'>
            <h1 className='text-3xl text-center'>All Review Section</h1>
        </div>
    );
};

export default AllReviews;