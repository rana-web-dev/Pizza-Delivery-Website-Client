import React from 'react';
import useTitle from '../../../title/title';
import Banner from '../banner/Banner';
import Service from '../services/Service';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
        </div>
    );
};

export default Home;