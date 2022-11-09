import React from 'react';

const WhoAmi = () => {
    return (
        <div className="hero ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className=''>
                <img src="https://demo.themehurst.net/html/pizzaify/images/background/special-pro_1_bg.png" alt=''/>
                </div>
                <div>
                    <p className='text-red-500'>WE PUT 100% OF LOVE AND DEDICATION</p>
                    <h1 className="text-5xl font-bold">Panpie, Burgers, And Best Pizzas In Town</h1>
                    <p className="py-6 2/4">
                        <li>Additional charge for premium toppings</li>
                        <li>Minimum of 2 required.</li>
                        <li>Premium toppings are fixed</li>
                    </p>
                    <button className="btn bg-orange-400 border-none">Who Am I?</button>
                </div>
            </div>
        </div>
    );
};

export default WhoAmi;