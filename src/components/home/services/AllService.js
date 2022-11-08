import React, { useEffect, useState } from 'react';
import AllServiceCard from './AllServiceCard';

const AllService = ({ srv }) => {

    const [serviceData, setService] = useState([]);;

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

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