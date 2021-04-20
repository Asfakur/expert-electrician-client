import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import ServiceDetail from '../ServicesDetail/ServiceDetail';
import './Services.css';


const Services = () => {

    const history = useHistory();
    const [services, setServices] = useState([]);

    //load data from backend
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    const orderService = (event) => {
        // event.preventDefault();
        history.push(`/customer/order/${event}`);
    }

    return (
        <section>
            <div className="text-center">
                <h1>Services We Offer</h1>
                <hr className="wave-icon" />
            </div>
            <div className="row container-fluid mt-4">
                {
                    services.map(service => <ServiceDetail orderService={orderService} service={service} key={service.name}></ServiceDetail>)
                }
            </div>
        </section>
    );
};

export default Services;