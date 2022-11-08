import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import useTitle from '../../../title/title';
import ServicesCard from './ServicesCard';

const Service = () => {

    // Add Dynamic Title
    useTitle('Services');
    
    const { serviceData } = useContext(AuthContext);
    const serviceDataSlice = serviceData.slice(0, 3);

    return (
        <div className='max-w-screen-xl mx-auto py-20'>
            <h1 className='pb-4 text-5xl text-center font-semibold'>I will deliver below type of Pizza,<br></br>This service will be quick on time. </h1>
            <p className='text-center pb-20 text-2xl'>Check out this list of services and then order to me.</p>
            <div className='grid grid-cols-1 gap-5 lg:gap-10 md:grid-cols-2 lg:grid-cols-3'>
                {
                    serviceDataSlice.map(srv => <ServicesCard
                        key={srv.id}
                        srv={srv}
                    ></ServicesCard>)
                }
            </div>
            <div className='text-center '>
                <Link to='/allServices'>
                    <button className='btn border-none bg-orange-400 mt-10 px-8'>See All <span className='pl-4 text-2xl'>&rarr;</span></button>
                </Link>
            </div>
        </div>
    );
};

export default Service;