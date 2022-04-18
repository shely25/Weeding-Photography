import React, { useEffect, useState } from 'react';
import Service from './Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('weedingPhotography.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='mx-5'>
            <h1 className='text-center mt-5 text-primary'>My Services</h1>
            <div className='cards'>
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)


                }
            </div>
        </div>
    );
};

export default Services;