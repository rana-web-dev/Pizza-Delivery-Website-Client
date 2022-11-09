import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../title/title';

const AddReview = () => {
    useTitle('All Review')
    const review = useLoaderData();

    return (
        <div className='py-10 max-w-screen-xl mx-auto'>
            <h1 className='text-3xl text-center'>All Review: {review.length}</h1>
           
            <div>
                <h2 className='text-3xl'>Add Your Opinion</h2>
                <br></br>
                <textarea className='border border-orange-400 w-full p-3 text-2xl' cols='' rows='5'></textarea>
                <br></br>
                <button className='btn border-none bg-orange-400'>Add Your Review</button>
            </div>
        </div>
    );
};

export default AddReview;