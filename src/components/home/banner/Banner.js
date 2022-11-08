import React from 'react';
import './banner.css';

const Banner = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse py-20">
                <div className='w-2/4'>
                <img src={require('../../../images/pizza.png')} alt='' />
                </div>
                <div>
                    <h1 className="text-7xl font-bold">I will deliver pizza to your Home!</h1>
                    <p className="py-6 text-2xl">This service will available for Mymensingh town. </p>
                    <button className="btn bg-orange-400 border-none">Book A Table</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;