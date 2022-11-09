import React from 'react';
import useTitle from '../../../title/title';
import Banner from '../banner/Banner';
import Discount from '../discount/Discount';
import Service from '../services/Service';
import WhoAmi from '../whoAmI/WhoAmi';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <WhoAmi></WhoAmi>
            <Discount></Discount>
        </div>
    );
};

export default Home;