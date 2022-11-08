import React, { useEffect, useState } from 'react';
import AllServiceCard from './AllServiceCard';

const AllService = ({srv}) => {

    const [serviceData, setService] = useState([]);;

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    return (
        <div>
            {
                serviceData.map(service => <AllServiceCard
                    key={service.id}
                    service={service}
                ></AllServiceCard>)
            }
        </div>
    );
};

export default AllService;