import React from 'react';
import './banner.css';

const Banner = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse py-20">
                <div className='w-2/4'>
                <img src={require('../../../images/pizza.png')} alt='' />
                </div>
                <div className='px-5'>
                    <h1 className="text-7xl font-bold">Supper delicious <br></br> Burger in town!</h1>
                    <p className="py-6">Food is any substance consumed to provide nutritional support for an organism.</p>
                    <button className="btn bg-orange-400 border-none">Book A Table</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;