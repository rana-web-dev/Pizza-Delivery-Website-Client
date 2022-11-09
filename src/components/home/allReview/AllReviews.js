import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../../title/title';
import ReviewAccess from './ReviewAccess';

const AllReviews = () => {
    useTitle('All Review')
    const review = useLoaderData();

    return (
        <div className='py-10 max-w-screen-xl mx-auto'>
            <h1 className='text-3xl text-center'>All Review: {review.length}</h1>
            <div className='p-10 max-w-screen-xl mx-auto grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    review.map(rev => <ReviewAccess
                        key={rev.id}
                        rev={rev}
                    ></ReviewAccess>)
                }
            </div>
            <div>
                <h2 className='text-3xl'>Add Your Opinion</h2>
                <br></br>
                <textarea className='border border-orange-400 w-full p-3 text-2xl' cols='' rows='5'></textarea>
                <br></br>
                <Link to='/addReview'>
                    <button className='btn border-none bg-orange-400'>Add Your Review</button>
                </Link>
            </div>
        </div>
    );
};

export default AllReviews;