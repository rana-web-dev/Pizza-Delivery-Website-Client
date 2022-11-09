import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../title/title';

const AddReview = () => {
    useTitle('All Review')
    const review = useLoaderData();

    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const imgUrl = form.url.value;
        const opinion = form.opinion.value;
        

        const reviewData = {
            revName: `${name}`,
            revImg: `${imgUrl}`,
            revDes: `${opinion}`
        }

        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
        .then(() => {
            form.reset();
        })
        .catch()

    }


    return (
        <div className='py-10 max-w-screen-xl mx-auto'>
            <h1 className='text-3xl text-center'>All Review: {review.length}</h1>
           
            <form onSubmit={handleReview}>
                <h2 className='text-3xl'>Add Your Opinion</h2>
                <br></br>
                <input type="text" name='name' placeholder="You Name" className="input rounded-none  w-full border-orange-400 " />
                <br></br>
                <br></br>
                <input type="text" name='url' placeholder="Image URL" className="input rounded-none  w-full border-orange-400 " />
                <br></br>
                <br></br>
                <textarea name='opinion' placeholder='Your Opinion...' className='border border-orange-400 w-full p-3 text-1xl' cols='' rows='5'></textarea>
                <br></br>
                <button  className='btn border-none bg-orange-400'>Add Your Review</button>
            </form>
        </div>
    );
};

export default AddReview;