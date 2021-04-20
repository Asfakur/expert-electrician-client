import React from 'react';

const ServiceDetail = (props) => {

    const service = props.service;
    
    return (
        <div className="col-md-4">
            <div onClick={() => props.orderService(service._id)} className="p-3 m-3 bg-light text-center hover-container">
                <img className="rounded" src={service.img} alt="" height="250px" width="300px" />
                <h5>{service.name}</h5>
                <small className="text-secondary">{service.serviceDetails}</small>
          
            </div>
        </div>
    );
};

export default ServiceDetail;