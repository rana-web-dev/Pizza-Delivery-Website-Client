import React from 'react';
import './discount.css';

const Discount = () => {
    return (
        <div className="hero bg-base-200 py-10">
            <div className="hero-content flex-col lg:flex-row">
                <div>
                <img src={require('./img/pizza-delivery.png')} alt='' />
                </div>
                <div>
                    <h1 className='text-6xl font-bold text-blue-400'>Get Free Delivery!</h1>
                    <p className='text-1xl pt-5'>You will be able to get Pizza Deliver without delivery charge. If you use take a token with by call to me.</p>
                </div>
                <div>
                    <button className='btn border-none bg-red-400 w-80'>Call: +445581236461</button>
                </div>
            </div>
        </div>
    );
};

export default Discount;