import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import useTitle from '../../../title/title';
import AllServiceCard from './AllServiceCard';

const AllService = () => {

    const { serviceData } = useContext(AuthContext);

    // Add Dynamic Title
    useTitle('All Services');

    return (
        <div className='max-w-screen-xl mx-auto py-20'>
            <h1 className='text-center text-4xl mb-10 pb-2 font-semibold border-b-2 border-orange-500'>All Services Here</h1>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    serviceData.map(service => <AllServiceCard
                        key={service.id}
                        service={service}
                    ></AllServiceCard>)
                }
            </div>

        </div>
    );
};

export default AllService;